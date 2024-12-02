import type { DataListEnvelope } from './dataEnvelope';
import { api } from './myFetch'

export async function getAll( token:string){
    return api<DataListEnvelope<User>>('users', null, 'GET', token)
}

export async function login(email:string, password:string) { 
    return api<DataListEnvelope<User>>('users/login', { email: email, password: password}, 'POST')
}

export async function getUserById(userId: number, token:string) {
    return api<DataListEnvelope<User>>('users/' + userId, null, 'GET', token)
}


export async function deleteUser(userId: number, token:string){
    return api<DataListEnvelope<User>>('users/' + userId, null, 'DELETE', token)
}

export async function updateExistingUser(userId: number, data: any, token:string){
    return api<DataListEnvelope<User>>('users/' + userId, data, 'PATCH', token)
}

export async function addNewUser(data: any){
    return api<DataListEnvelope<User>>('users' , data, 'POST')
}

export async function getFriendByUserId(userId: number){
    return api<DataListEnvelope<User>>('users/friends/' + userId, null, 'GET')
}

export async function getFriendByName(name: string){
    return api<DataListEnvelope<User>>('users/friends/name/', name, 'POST')
}
export interface User {
    name: string;
    username: string;
    password: string;
    email: string;
    profileImageUrl: string;
    userId: number;
}
  
