export interface Message {
    _id: string | number;
    text: string;
    createdAt: Date | number;
    user: User;
}

export interface User {
    _id: string | number;
    name: string;
}