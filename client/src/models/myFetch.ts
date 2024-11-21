// this is the singular file that will be used to communicate with our backend server

const API_URL = 'https://localhost:3000/api/v1/'

//used if we want to fetch some data outside of our own api
export function rest<T>(url: string, data?: any, method?: string): Promise<T> {
    return fetch(url, {
        // custom method if one is supplied, else if data is specified without a method use POST else use GET
        method: method ?? data ? 'POST' : 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    }).then(x => x.json())
}

// use this if we want to fetch data from our api
export function api<T>(url: string, data?: any, method?: string): Promise<T> {
    return rest<T>(API_URL + url, data, method);
}