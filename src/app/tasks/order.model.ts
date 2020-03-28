import {Task} from './task.model';

export interface Order {
    id: string;
    teamId: string;
    needyName: string;
    address: string;
    city: string;
    phone: string;
    email: string;
    tasks: Task[];
}
