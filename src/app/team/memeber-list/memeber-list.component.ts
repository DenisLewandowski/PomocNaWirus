import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseAuthService} from '../../auth/firebase-auth.service';
import {User} from '../../auth/user.model';
import {Order} from '../../tasks/order.model';

@Component({
    selector: 'app-memeber-list',
    templateUrl: './memeber-list.component.html',
    styleUrls: ['./memeber-list.component.scss']
})
export class MemeberListComponent implements OnInit {

    teamId: string;
    members: User[] = [];

    constructor(private db: AngularFirestore, private auth: FirebaseAuthService) {
    }

    ngOnInit(): void {
        this.auth.user$.subscribe(user => {
            this.teamId = user.teamId;
            this.db.collection('users', ref => ref.where('teamId', '==', this.teamId)).get().subscribe(
                users => users.forEach(u => this.members.push(u.data() as User))
            );
        });
    }

    view(member: User) {

    }

    delete(member: User) {

    }
}
