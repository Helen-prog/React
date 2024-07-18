import { FC, useState } from "react";
import Toys from "../models/Toys";

interface NewToys {
    title: string;
    price: string;
    img: string;
}

const initState = {
    title: "",
    price: "",
    img: ""
}

interface AddToysFormProps {
    addToys: (newToys: Toys) => void;
}



const AddToysForm: FC<AddToysFormProps> = ({ addToys }) => {
    const [newToys, setNewToys] = useState<NewToys>(initState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewToys({
            ...newToys,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, price, img} = newToys;

        if (title && price && img){
            addToys({
                title,
                img,
                price: Number(price),
                id: Date.now()
            });
            setNewToys(initState);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <input
                    type="text"
                    name="title"
                    placeholder="Название"
                    onChange={handleChange}
                    value={newToys.title} />
            </p>
            <p>
                <input
                    type="text"
                    name="price"
                    placeholder="Стоимость"
                    onChange={handleChange}
                    value={newToys.price} />
            </p>
            <p>
                <input
                    type="text"
                    name="img"
                    placeholder="Изображение"
                    onChange={handleChange}
                    value={newToys.img} />
            </p>
            <p>
                <button>+ Добавить</button>
            </p>
        </form>
    )
}

export default AddToysForm;
