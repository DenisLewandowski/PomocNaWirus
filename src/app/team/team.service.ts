import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Team} from './team.model';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    teamRef = this.firebase.collection('teams');

    constructor(private firebase: AngularFirestore) {
    }

    getTeam(teamId: string): Observable<Team> {
        return this.teamRef.doc<Team>(teamId).get().pipe(map(team => {
            return team.data() as Team;
        }));
    }

    saveTeam(teamId: string, team: Team): Promise<void> {
        return this.teamRef.doc(teamId).update(team);
    }
}
