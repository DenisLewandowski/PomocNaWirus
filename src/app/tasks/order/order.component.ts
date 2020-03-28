import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Task} from '../task.model';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
    editMode: boolean;
    form: FormGroup;
    tasks: Array<Task> = [];

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = this.formBuilder.group({
            needyName: '',
            address: '',
            city: '',
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
