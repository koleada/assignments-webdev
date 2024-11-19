export interface DataEnvelope<T> {
    data: T;
    isSuccess: boolean;
    message?: string;
}

export interface DataListEnvelope<T> {
    data: T[];
    total: number;
    isSuccess?: boolean;
}