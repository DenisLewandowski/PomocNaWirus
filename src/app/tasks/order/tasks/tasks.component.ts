import {Component, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';
import {User} from '../../../auth/user.model';
import {TaskStatus} from '../../../common/task-status';
import {Task} from '../../task.model';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

interface TaskType {
    value: string;
    i18n: string;
    iconName: string;
}

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
    editMode: boolean;
    tasks: Array<Task> = [];
    taskTypes: Array<TaskType> = [];
    todayDate: Date;
    volunteers: User[] = [];

    constructor() {
    }

    ngOnInit() {
        this.initTaskTypes();
        this.todayDate = new Date();
    }

    initTaskTypes() {
        this.taskTypes.push({value: 'SHOPPING', i18n: 'order.shopping', iconName: 'local_mall'} as TaskType);
        this.taskTypes.push({value: 'PET_CARE', i18n: 'order.pet-care', iconName: 'pets'} as TaskType);
        this.taskTypes.push({value: 'OTHER', i18n: 'order.other', iconName: 'work'} as TaskType);
    }

    add() {
        this.tasks.push({
            type: 'SHOPPING',
            description: '',
            realizationDate: Timestamp.now(),
            status: TaskStatus.ADDED
        } as Task);
    }

    getTaskType(type: string): TaskType {
        return this.taskTypes.find(t => t.value === type);
    }

    delete(task: Task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    dateChange(date: MatDatepickerInputEvent<Date>, task: Task) {
        task.realizationDate = Timestamp.fromDate(date.value);
    }

    toDate(timestamp: Timestamp) {
        return (timestamp as Timestamp).toDate();
    }
}
