import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Team} from '../team/team.model';
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
    user$: Observable<User>;

    constructor(private fireAuth: AngularFireAuth,
                private db: AngularFireDatabase,
                private firestore: AngularFirestore,
                private router: Router) {
        this.teamReference = db.object('/teams');
        this.fireAuth.authState.subscribe(user => {
            if (user) {
                this.user$ = this.firestore.doc<User>(`users/${user.uid}`).valueChanges();
            }
        });
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

    newUserSignedIn(cred: Credentials, user: User, team: Team) {
        this.register(cred).then(credentials => {
            if (credentials.user) {
                const teamRef = this.firestore.collection('teams').ref;
                const userRef = this.firestore.collection('users').ref;

                userRef.doc(credentials.user.uid).set({...user, userType: 'ADMIN', teamId: teamRef.id})
                    .then(() => this.login(cred))
                    .then(() => teamRef.doc().set({...team, admins: [credentials.user.uid]}))
                    .then(() => this.router.navigate(['/home']));
            }
        }).catch(err => {
            return err.message;
        });
    }
}
