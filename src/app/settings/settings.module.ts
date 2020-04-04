import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {GeneralSettingsComponent} from './general-settings/general-settings.component';


@NgModule({
    declarations: [
        GeneralSettingsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule
    ]
})
export class SettingsModule {
}
