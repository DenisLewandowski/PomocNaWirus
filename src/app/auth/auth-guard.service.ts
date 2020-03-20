import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FirebaseAuthService} from './firebase-auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: FirebaseAuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.user$.pipe(map(user => {
            if (user !== null) {
                this.router.navigate(['/login'], {
                    queryParams: {
                        return: state.url
                    }
                });
                return false;
            } else {
                return true;
            }
        }));
    }
}
