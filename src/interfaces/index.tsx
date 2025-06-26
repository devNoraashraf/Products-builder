export interface Iproduct {
    id?: string | undefined;
    title?: string;
    description: string;
    price: number;
    imageURL: string;
    colors: string[];
    category?: {
        name?: string;
        imageURL?: string;
    }
}
export interface IFormData {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
}