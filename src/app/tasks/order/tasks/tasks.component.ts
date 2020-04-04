import {Component, OnInit} from '@angular/core';
import {TaskStatus} from '../../../common/task-status';
import {Task} from '../../task.model';

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
            realizationDate: this.todayDate,
            status: TaskStatus.ADDED
        } as Task);
    }

    getTaskType(type: string): TaskType {
        return this.taskTypes.find(t => t.value === type);
    }

    delete(task: Task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}
