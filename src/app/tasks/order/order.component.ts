import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {FirebaseAuthService} from '../../auth/firebase-auth.service';
import {NotificationService} from '../../notification.service';
import {Order} from '../order.model';
import {Task} from '../task.model';
import {TasksComponent} from './tasks/tasks.component';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
    editMode: boolean;
    form: FormGroup;
    tasks: Array<Task> = [];
    teamId: string;
    mode: string;

    @ViewChild(TasksComponent, {static: true})
    tasksComponent: TasksComponent;

    constructor(private formBuilder: FormBuilder,
                private auth: FirebaseAuthService,
                private db: AngularFirestore,
                private notificationService: NotificationService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.initForm();
        this.mode = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;
        this.prepareDependingOnMode();
        this.auth.user$.subscribe(user => {
            this.teamId = user.teamId;
        });
    }

    initForm() {
        this.form = this.formBuilder.group({
            needyName: '',
            address: '',
            city: '',
            phone: '',
            email: ''
        });
    }

    edit() {
        this.form.enable();
        this.editMode = true;
        this.tasksComponent.editMode = true;
    }

    save() {
        this.db.collection('orders').add(
            {
                ...this.form.getRawValue(),
                teamId: this.teamId,
                tasks: this.tasksComponent.tasks
            })
            .then(() => {
                this.notificationService.savedSuccessfully();
                this.router.navigate(['/orders']);
            }).catch(() => {
            this.notificationService.error();
        });
    }

    cancel() {
        if (this.mode === 'new') {
            this.router.navigate(['/orders']);
        } else {
            this.form.disable();
            this.editMode = false;
            this.tasksComponent.editMode = false;
        }
    }

    private loadOrder() {
        this.route.paramMap.pipe(map(() => window.history.state)).subscribe(state => {
            if ((state as Order).id) {
                const order = state as Order;
                this.form.setValue({needyName: order.needyName, address: order.address, city: order.city, email: order.email, phone: order.phone});
                this.tasksComponent.tasks = order.tasks;
            } else {
                this.db.collection('orders').doc(this.route.snapshot.url[this.route.snapshot.url.length - 1].path)
                    .get().subscribe(o => {
                    const order = o.data() as Order;
                    this.form.setValue({needyName: order.needyName, address: order.address, city: order.city, email: order.email, phone: order.phone});
                    this.tasksComponent.tasks = order.tasks;
                });
            }
        });
    }

    private prepareDependingOnMode() {
        if (this.mode === 'new') {
            this.form.enable();
            this.editMode = true;
            this.tasksComponent.editMode = true;
        } else {
            this.loadOrder();
            this.form.disable();
        }
    }
}
