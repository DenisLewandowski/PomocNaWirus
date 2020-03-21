import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Team} from './team.model';
import {User} from './user.model';
import UserCredential = firebase.auth.UserCredential;


export interface Credentials {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class FirebaseAuthService {
    teamReference: AngularFireObject<Team>;

    constructor(private fireAuth: AngularFireAuth,
                private db: AngularFireDatabase,
                private firestore: AngularFirestore,
                private router: Router) {
        this.teamReference = db.object('/teams');
    }

    async signOut() {
        await this.fireAuth.auth.signOut().then(
            () => this.router.navigate(['/login'])
        );
    }

    login(credentials: Credentials) {
        return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    }

    register(credentials: Credentials): Promise<UserCredential> {
        return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }

    newUserSignedIn(credentials: Credentials, user: User, team: Team) {
        this.register(credentials).then(credentials => {
            if (credentials.user) {
                const teamRef = this.firestore.collection('teams').ref.doc();
                const userRef = this.firestore.collection('users').ref.doc();

                userRef.set({...user, uid: credentials.user.uid, userType: 'ADMIN', teamId: teamRef.id}).then(() => {
                    teamRef.set({...team, admins: [credentials.user.uid]}).then(() => this.login(credentials).then(() => this.router.navigate(['/home'])));
                });
                return '';
            }
        }).catch(err => {
            return err.message;
        });
    }
}
