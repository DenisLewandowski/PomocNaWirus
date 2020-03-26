import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {FirebaseAuthService} from '../../auth/firebase-auth.service';
import {Team} from '../team.model';
import {TeamService} from '../team.service';

@Component({
    selector: 'app-team-settings',
    templateUrl: './team-settings.component.html',
    styleUrls: ['./team-settings.component.scss']
})
export class TeamSettingsComponent implements OnInit {
    editMode: boolean;
    form: FormGroup;
    team: Team;
    teamId: string;

    constructor(private formBuilder: FormBuilder,
                private auth: FirebaseAuthService,
                private teamService: TeamService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.initForm();
        this.form.disable();
        this.auth.user$.subscribe(user => {
            this.teamId = user.teamId;
            this.teamService.getTeam(this.teamId).subscribe(team => {
                this.team = team;
                this.form.setValue({name: team.name, city: team.city, email: team.email, phone: team.phone});
            });
        });
    }

    initForm() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            city: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required]
        });
    }

    edit() {
        this.form.enable();
        this.editMode = true;
    }

    save() {
        if (this.form.valid) {
            this.teamService.saveTeam(this.teamId, this.form.getRawValue())
                .then(() => this.snackBar.open('Saved successfully!', 'OK',
                    {verticalPosition: 'top', duration: 1500, horizontalPosition: 'right'}))
                .catch(() => {
                    this.snackBar.open('Saving failed!', 'OK', {verticalPosition: 'top', duration: 1500, horizontalPosition: 'right'});
                    this.teamService.getTeam(this.teamId).subscribe(team => {
                        this.team = team;
                        this.form.setValue({name: team.name, city: team.city, email: team.email, phone: team.phone});
                    });
                });
            this.editMode = false;
            this.form.disable();
        }
    }

    cancel() {
        this.form.disable();
        this.editMode = false;
    }
}