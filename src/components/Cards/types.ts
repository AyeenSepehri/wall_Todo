export interface CardDataTypes {
    id: number | string;
    title: string;
    registrationDate: string;
    deadline: string;
    status: string;
    startDate?: null | string | undefined;
    endDate?: null | string | undefined;
}