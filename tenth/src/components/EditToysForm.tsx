import {FC, useState} from "react";
import Toys from "../models/Toys";

interface EditToysFormProps{
    data: Toys;
    updateToys: (newToys: Toys) => void;
    handleToggleEdit: () => void;
}

const EditToysForm: FC<EditToysFormProps> = ({data, updateToys, handleToggleEdit }) => {
    const [editToys, setEditToys] = useState<Toys>(data);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditToys({
            ...editToys,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, price, img} = editToys;

        if (title && price && img){
            updateToys(editToys);
            handleToggleEdit();       
        }
    }


    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <p>
                <input 
                    type="text"
                    name="title"
                    placeholder="Название"
                    onChange={handleChange}
                    value={editToys.title}
                />
            </p>
            <p>
                <input 
                    type="text"
                    name="price"
                    placeholder="Стоимость"
                    onChange={handleChange}
                    value={editToys.price}
                />
            </p>
            <p>
                <input 
                    type="text"
                    name="img"
                    placeholder="Изображение"
                    onChange={handleChange}
                    value={editToys.img}
                />
            </p>
            <p>
                <button>Подтвердить</button>
            </p>
        </form>
    )
}

export default EditToysForm;