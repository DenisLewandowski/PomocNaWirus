import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
    declarations: [ConfirmDialogComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatInputModule,
        TranslateModule,
        MatButtonModule
    ]
})
export class AppCommonModule {
}
