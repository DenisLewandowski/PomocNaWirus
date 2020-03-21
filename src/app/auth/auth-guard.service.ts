import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {FirebaseAuthService} from './firebase-auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: FirebaseAuthService, private router: Router, private fireAuth: AngularFireAuth) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.fireAuth.auth.currentUser) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}
