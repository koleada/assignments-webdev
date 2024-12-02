// this is the singular file that will be used to communicate with our backend server

const API_URL = 'http://localhost:3000/api/v1/'

//used if we want to fetch some data outside of our own api
export function rest<T>(url: string, data?: any, method: string = 'GET', token?: string): Promise<T> {

    let headers;
    if (token){
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }
    else {
        headers = {
            'Content-Type': 'application/json',
        }
    }
    return fetch(url, {
        // custom method if one is supplied, else if body data is specified without a method use POST else use GET
        method: method,
        headers: headers,
        body: data ? JSON.stringify(data) : null,
    }).then(x => x.json())
}

// use this if we want to fetch data from our api
export function api<T>(url: string, data?: any, method: string = 'GET', token?:string): Promise<T> {
    return rest<T>(API_URL + url, data, method, token);
}
