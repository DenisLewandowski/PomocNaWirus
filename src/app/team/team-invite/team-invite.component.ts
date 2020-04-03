import {Component, OnInit} from '@angular/core';
import {ClipboardService} from 'ngx-clipboard';
import {FirebaseAuthService} from '../../auth/firebase-auth.service';
import {NotificationService} from '../../notification.service';

@Component({
    selector: 'app-team-invite',
    templateUrl: './team-invite.component.html',
    styleUrls: ['./team-invite.component.scss']
})
export class TeamInviteComponent implements OnInit {
    teamId: string;

    constructor(private auth: FirebaseAuthService, private notification: NotificationService, private clipboard: ClipboardService) {
        this.auth.user$.subscribe(user => {
            this.teamId = user.teamId;
        });
    }

    ngOnInit(): void {
    }

    copy() {
        this.clipboard.copy(this.teamId);
        this.notification.copiedSuccessfully();
    }
}
