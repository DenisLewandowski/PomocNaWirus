import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from './user.model';

export interface Credentials {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class FirebaseAuthService {

    user$: Observable<User>;

    constructor(private fireAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
        this.user$ = this.fireAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );
    }

    async signOut() {
        await this.fireAuth.auth.signOut();
        return this.router.navigate['/'];
    }

    login(credentials: Credentials) {
        return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    }

    register(credentials: Credentials) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }

    logout() {
        return this.fireAuth.auth.signOut();
    }
}
