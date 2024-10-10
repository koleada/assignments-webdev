export interface DataEnvelope<T> {
    data: T;
    error: string;
}

export interface DataListEnvelope<T> {
    data: T[];
    total: number;
    error?: string;
}