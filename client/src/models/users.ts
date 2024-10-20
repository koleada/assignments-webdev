import data from '../data/users.json'
import type { DataListEnvelope } from './dataEnvelope';

export function getAll() : DataListEnvelope<User>{
    return{
        data: data.users,
        total: data.users.length
    }
}

export function login(email:string, password:string) { 
    const user = data.users.find(user => user.email === email && user.password === password);
    if(user){
        return user;
    }
    return false;
}

export function getUserById(userId: number) : User {
    const user =  data.users.find(user => user.userId === userId);
    if (!user) {
        return {
          name: 'Unknown User',
          username: 'Unknown User',
          password: 'UnknownUser',
          email: 'UnknownUser@example.com',
          profileImageUrl: 'https://via.placeholder.com/150',
          userId: -1,

        };
    }
    
    return user;
}

export interface User {
    name: string;
    username: string;
    password: string;
    email: string;
    profileImageUrl: string;
    userId: number;
}
  
