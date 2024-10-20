import type { DataListEnvelope } from './dataEnvelope';
import data from '../data/workouts.json'

export function getAll() : DataListEnvelope<Workout>{
    return{
        data: data.workouts,
        total: data.workouts.length
    }
}

export function getWorkoutsByUserId(userId: number): Workout[] {
    return data.workouts.filter(workout => workout.userId === userId);
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