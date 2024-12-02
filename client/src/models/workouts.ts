import type { DataListEnvelope } from './dataEnvelope';
import data from '../data/workouts.json'
import { api } from './myFetch'

export async function getAll(){
    return api<DataListEnvelope<Workout>>('workouts')
}

export async function getWorkoutsByUserId(userId: number, token: string){
    return api<DataListEnvelope<Workout>>('workouts/user-workouts/' + userId, null, 'GET', token)
}

export async function deleteWorkout(id: number, token:string) {
    return api<DataListEnvelope<Workout>>('workouts/' + id, null, 'DELETE', token)
}

export async function addWorkout(data: any, token: string) {
    return api<DataListEnvelope<Workout>>('workouts', data, 'POST', token)
}

export async function editWorkout(id: number, data: any, token:string) {
    return api<DataListEnvelope<Workout>>('workouts/' + id, data, 'PATCH', token)
}

export interface Workout {
    id: number;
    description: string;
    dateOfPosting: string;
    imageUrl: string;
    distance: number;
    location: string;
    type: string;
    duration: number;
    userId: number; // Reference to the User's ID
}