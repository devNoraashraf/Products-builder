export interface Iproduct {
    id?: string | undefined;
    title?: string;
    description: string;
    price: number;
    imageURL: string;
    colors?: string[];
    category?: {
        name?: string;
        imageURL?: string;
    }
}