export interface DataEnvelope<T> {
    data: T;
    isSuccess: boolean;
    message?: string;
}

export interface DataListEnvelope<T> extends DataEnvelope<T[]> {
    data: T[];
    total: number;
}