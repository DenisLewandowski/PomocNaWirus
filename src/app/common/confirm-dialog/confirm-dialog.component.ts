import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
    confirm: boolean;

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {
    }

    ngOnInit(): void {
    }

    onCancel() {
        this.confirm = false;
        this.dialogRef.close(this.confirm);
    }

    onSubmit() {
        this.confirm = true;
        this.dialogRef.close(this.confirm);
    }
}
