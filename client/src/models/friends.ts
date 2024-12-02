import type { DataListEnvelope } from './dataEnvelope';
import { api } from './myFetch'

export async function getAll(token: string){
    return api<DataListEnvelope<Friend>>('friends', null, 'GET', token);
}

export async function getFriends(userId: number, token: string){
    return api<DataListEnvelope<Friend>>('friends/getFriends/' + userId, null, 'GET', token);
}

export async function getFriendById(id: number, token: string){
    return api<DataListEnvelope<Friend>>('friends/' + id, null, 'GET', token);
}
  
export async function deleteFriend(id: number, token: string){
    return api<DataListEnvelope<Friend>>('friends/' + id, null, 'DELETE', token);
}

export async function addFriend(data: any, token: string){
    return api<DataListEnvelope<Friend>>('friends', data, 'POST', token);
}

export async function getFriendId(userId: number, friendUserId: number, token: string){
    return api<DataListEnvelope<Friend>>('friends/getFriendId/' + userId + '/' + friendUserId, null, 'GET', token);
}

export interface Friend {
    id: number;
    userId: number;
    friendUserId: number
} 