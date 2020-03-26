import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-task-new',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    editMode: boolean;
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
    }

    initForm() {
        this.form = this.formBuilder.group({
            needyName: '',
            address: '',
            phone: '',
            email: '',
            tasks: []
        });
    }

    edit() {
        this.form.enable();
        this.editMode = true;
    }

    save() {

    }

    cancel() {
        this.form.disable();
        this.editMode = false;
    }
}
