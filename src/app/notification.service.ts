import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    config: MatSnackBarConfig = {
        verticalPosition: 'top',
        duration: 1500,
        horizontalPosition: 'right'
    };

    readonly savedSuccessfullyMessage: string;
    readonly deletedSuccessfullyMessage: string;
    readonly copiedSuccessfullyMessage: string;
    readonly errorMessage: string;

    constructor(private snackBar: MatSnackBar, private translate: TranslateService) {
        this.savedSuccessfullyMessage = this.translate.instant('messages.saved');
        this.deletedSuccessfullyMessage = this.translate.instant('messages.deleted');
        this.copiedSuccessfullyMessage = this.translate.instant('messages.teamCodeCopied');
        this.errorMessage = this.translate.instant('messages.error');
    }

    savedSuccessfully() {
        this.snackBar.open(this.savedSuccessfullyMessage, 'OK', this.config);
    }

    deletedSuccessfully() {
        this.snackBar.open(this.deletedSuccessfullyMessage, 'OK', this.config);
    }

    copiedSuccessfully() {
        this.snackBar.open(this.copiedSuccessfullyMessage, 'OK', this.config);
    }

    error() {
        this.snackBar.open(this.errorMessage, 'OK', this.config);
    }

}
