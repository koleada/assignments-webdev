// this is the singular file that will be used to communicate with our backend server

export function rest<T>(url: string): Promise<T> {
    return fetch(url).then(x => x.json())
}