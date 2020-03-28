import {ScrollingModule} from '@angular/cdk/scrolling';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSelectModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {AuthModule} from '../auth/auth.module';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderComponent} from './order/order.component';
import { TasksComponent } from './order/tasks/tasks.component';

@NgModule({
    declarations: [OrderListComponent, OrderComponent, TasksComponent, TasksComponent],
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
        FormsModule
    ],
    providers: [

    ]
})
export class OrderModule {
}
