import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthGuard} from './auth-guard.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardChild implements CanActivateChild {

    constructor(private authGuard: AuthGuard) {
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authGuard.canActivate(childRoute, state);
    }
}
