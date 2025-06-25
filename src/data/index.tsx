import type { Iproduct } from "../interfaces";
import {v4 as uuid} from "uuid";
export const products: Iproduct[] = [
    {
        id: uuid(),
        title: "NORA",
        description: "A fast car",
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
