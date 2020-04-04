import {Component, Input, OnInit} from '@angular/core';
import {TaskStatus} from '../../common/task-status';
import {Order} from '../order.model';

@Component({
    selector: 'app-order-statistics',
    templateUrl: './order-statistics.component.html',
    styleUrls: ['./order-statistics.component.scss']
})
export class OrderStatisticsComponent implements OnInit {

    @Input()
    orders: Order[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

    getTaskCount(): number {
        let taskCount = 0;
        this.orders.forEach(o => taskCount += o.tasks.length);
        return taskCount;
    }

    getDoneTaskCount(): number {
        let doneTaskCount = 0;
        this.orders.forEach(o => doneTaskCount += o.tasks.filter(t => t.status === TaskStatus.DONE).length);
        return doneTaskCount;
    }

    getAssignedTaskCount(): number {
        let assignedTaskCount = 0;
        this.orders.forEach(o => assignedTaskCount += o.tasks.filter(t => t.status === TaskStatus.ASSIGNED).length);
        return assignedTaskCount;
    }

    getUnassignedTaskCount(): number {
        let unassignedTaskCount = 0;
        this.orders.forEach(o => unassignedTaskCount += o.tasks.filter(t => t.status === TaskStatus.ADDED).length);
        return unassignedTaskCount;
    }
}
