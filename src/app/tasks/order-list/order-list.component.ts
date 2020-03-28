import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {FirebaseAuthService} from '../../auth/firebase-auth.service';
import {NotificationService} from '../../notification.service';
import {Order} from '../order.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

    orders: Order[] = [];
    teamId: string;

    constructor(private router: Router,
                private db: AngularFirestore,
                private auth: FirebaseAuthService,
                private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.auth.user$.subscribe(user => {
            this.teamId = user.teamId;
            this.db.collection('orders', ref => ref.where('teamId', '==', this.teamId)).get().subscribe(
                orders => orders.forEach(o => this.orders.push( {...o.data() as Order, id: o.id}))
            );
        });
    }

    addNew() {
        this.router.navigate(['orders/new']);
    }

    delete(orderId: string) {
        this.db.collection('/orders').doc(orderId).delete().then(() => {
            this.notificationService.deletedSuccessfully();
            this.orders = this.orders.filter(o => o.id !== orderId);
        })
            .catch(() => this.notificationService.error());
    }

    edit(order: Order) {
        this.router.navigateByUrl('/orders/' + order.id, {state: order});
    }

    view(order: Order) {
        this.router.navigateByUrl('/orders/' + order.id, {state: order});
    }
}
