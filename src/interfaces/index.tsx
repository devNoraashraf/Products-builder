export interface Iproduct {
    id?: string | undefined;
    title?: string;
    description: string;
    price: string;
    imageURL: string;
    colors: string[];
    category?: {
        name?: string;
        imageU: string;
    }
      [key: string]: any; // 👈 أضف هذا السطر
}
export interface IFormData {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
}