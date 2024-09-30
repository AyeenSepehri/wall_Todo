// CardDataTypes defines the structure for the data related to a task card
export interface CardDataTypes {
    id: string;
    title: string;
    registrationDate: string;
    deadline: string;
    status: string;
    isDelayed: boolean
    startDate?: null | string | undefined;
    endDate?: null | string | undefined;
}

// CardProps defines the props expected by the Card component
export interface CardProps {
    cardData: CardDataTypes;
}
