import {ScrollingModule} from '@angular/cdk/scrolling';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatListModule, MatTabsModule, MatTooltipModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {AuthModule} from '../auth/auth.module';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderComponent} from './order/order.component';

@NgModule({
    declarations: [OrderListComponent, OrderComponent],
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
        MatTabsModule
    ]
})
export class OrderModule {
}
