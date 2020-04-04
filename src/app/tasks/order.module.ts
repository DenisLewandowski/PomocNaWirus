import {ScrollingModule} from '@angular/cdk/scrolling';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {AuthModule} from '../auth/auth.module';
import {FirebaseAuthService} from '../auth/firebase-auth.service';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderComponent} from './order/order.component';
import {TasksComponent} from './order/tasks/tasks.component';
import { OrderStatisticsComponent } from './order-statistics/order-statistics.component';

@NgModule({
    declarations: [OrderListComponent, OrderComponent, TasksComponent, TasksComponent, OrderStatisticsComponent],
    imports: [
        CommonModule,
        TranslateModule,
        ScrollingModule,
        MatTooltipModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        AuthModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        AngularFirestoreModule,
        MatPaginatorModule
    ],
    providers: [
        AngularFirestore,
        FirebaseAuthService
    ]
})
export class OrderModule {
}
