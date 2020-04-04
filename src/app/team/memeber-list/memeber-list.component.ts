import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';
import {FirebaseAuthService} from '../../auth/firebase-auth.service';
import {User} from '../../auth/user.model';
import {ConfirmDialogComponent} from '../../common/confirm-dialog/confirm-dialog.component';
import {NotificationService} from '../../common/notification.service';
import {TaskStatus} from '../../common/task-status';
import {Order} from '../../tasks/order.model';

@Component({
    selector: 'app-memeber-list',
    templateUrl: './memeber-list.component.html',
    styleUrls: ['./memeber-list.component.scss']
})
export class MemeberListComponent implements OnInit {

    teamId: string;
    members: User[] = [];

    constructor(private db: AngularFirestore,
                private auth: FirebaseAuthService,
                public dialog: MatDialog,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.auth.user$.subscribe(user => {
            this.teamId = user.teamId;
            this.db.collection('users', ref => ref.where('teamId', '==', this.teamId)).get().subscribe(
                users => users.forEach(u => this.members.push({...u.data() as User, id: u.id}))
            );
        });
    }

    delete(member: User) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.db.collection('/users').doc(member.id).update({
                    teamId: ''
                }).then(() => {

                    this.db.firestore.collection('/orders').where('teamId', '==', this.teamId).get().then(orders => {
                        const ord: Order[] = [];
                        orders.forEach(o => ord.push({...o.data() as Order, id: o.id}));
                        ord.forEach(o => o.tasks.forEach(t => {
                            if (t.volunteerId === member.id && t.status === TaskStatus.ASSIGNED) {
                                t.volunteerId = '';
                                t.status = TaskStatus.ADDED;
                            }
                        }));
                        ord.forEach(o => {
                            this.db.firestore.collection('/orders').doc(o.id).update(o);
                        });
                    });

                }).then(() => {
                    this.notificationService.deletedSuccessfully();
                    this.members = this.members.filter(m => m.id !== member.id);
                }).catch(() => this.notificationService.error());
            }

        });
    }
}
