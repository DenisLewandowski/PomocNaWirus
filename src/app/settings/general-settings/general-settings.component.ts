import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {NotificationService} from '../../common/notification.service';

@Component({
    selector: 'app-general-settings',
    templateUrl: './general-settings.component.html',
    styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {
    editMode: boolean;
    form: FormGroup;
    langList = [{lang: 'en', display: 'English'}, {lang: 'pl', display: 'Polish'}];

    constructor(private formBuilder: FormBuilder, private translate: TranslateService, private notification: NotificationService) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = this.formBuilder.group({
            lang: new FormControl(this.translate.currentLang)
        });
        this.form.disable();
    }

    edit() {
        this.editMode = true;
        this.form.enable();
    }

    save() {
        this.translate.use(this.form.value.lang);
        this.editMode = false;
        this.form.disable();
        this.notification.savedSuccessfully();
    }

    cancel() {
        this.editMode = false;
        this.form.disable();
    }
}
