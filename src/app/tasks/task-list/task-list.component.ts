import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Order} from '../task.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

    orders: Order[] = [];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.orders.push({
            id: '',
            teamId: '',
            needyName: 'Genowefa Pigwa',
            address: 'Zjednoczenia 14/5',
            email: 'genowefa@wp.pl',
            phone: '123444333',
            tasks: []
        });
        this.orders.push({
            id: '',
            teamId: '',
            needyName: 'Mariusz Henio',
            address: 'Warszawska 11C/5',
            email: 'mariohen@wp.pl',
            phone: '987354212',
            tasks: []
        });
        this.orders.push({
            id: '',
            teamId: '',
            needyName: 'Gienek Loska',
            address: 'Legnicka 55/2',
            email: 'loska.gienek@gmail.com',
            phone: '927362727',
            tasks: []
        });
    }

    addNew() {
        this.router.navigate(['tasks/new']);
    }

    delete(orderIndex: number) {
        this.orders.splice(orderIndex, 1);
    }

    edit(order: Order) {

    }

    drillDown(order: Order) {

    }
}
