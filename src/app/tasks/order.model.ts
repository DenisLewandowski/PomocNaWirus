import {Task} from './task.model';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

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
