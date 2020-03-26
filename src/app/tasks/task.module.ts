import {ScrollingModule} from '@angular/cdk/scrolling';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatTooltipModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {AuthModule} from '../auth/auth.module';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskComponent} from './task/task.component';

@NgModule({
    declarations: [TaskListComponent, TaskComponent],
    imports: [
        CommonModule,
        TranslateModule,
        ScrollingModule,
        MatTooltipModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        AuthModule
    ]
})
export class TaskModule {
}
