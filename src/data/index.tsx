import type { IFormData, Iproduct } from "../interfaces";
import {v4 as uuid} from "uuid";
export const products: Iproduct[] = [
    {
        id: uuid(),
        title: "NORA",
        description: "A fast carjfffffffffjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        price: 50000,
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s",
        colors: ["red", "blue", "green"],
        category: {
            name: "Vehicles",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s"
        }
    },
    {
        id: uuid(),
        title: "Bike",
        description: "A cool bike",
        price: 15000,
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s",
        colors: ["black", "white"],
        category: {
            name: "Vehicles",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s"
        }
    },
    {
        id: uuid(),
        title: "Boat",
        description: "A luxury boat",
        price: 200000,
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s",
        colors: ["white", "blue"],
        category: {
            name: "Vehicles",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s"
        }
    },
    {        id: uuid(),
        title: "Plane",     
        description: "A private plane",
        price: 3000000,
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s",
        colors: ["white", "silver"],
        category: {
            name: "Vehicles",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s"
        }
    }
        
];

export const formData: IFormData[] = [
    {
        id: "title",
        name: "title",
        label: " Product   Title",
        type: "text",
        placeholder: "Enter product title",
    },
    {
        id: "description",
        name: "description",
        label: "Product Description",
        type: "textarea",
        placeholder: "Enter product description",
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "number",
        placeholder: "Enter product price",
    },
    {
        id: "imageURL",
        name: "imageURL",
        label: "Product Image URL",
        type: "text",
        placeholder: "Enter product image URL",
    },
    // {
    //     id: "colors",
    //     name: "colors",
    //     label: "Product Colors (comma separated)",
    //     type: "text",
    //     placeholder: "Enter product colors, e.g. red, blue, green",
    // },
]
