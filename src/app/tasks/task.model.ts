import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface Task {
    type: string;
    description: string;
    realizationDate: Timestamp;
    status: number;
    volunteerId: string;
}
