import {FC, useState} from "react";
import Toys from "../models/Toys";
import { MdCurrencyRuble, MdModeEdit, MdDelete } from "react-icons/md";
import EditToysForm from "./EditToysForm";

interface SingleToyProps{
    toy: Toys;
    updateToys: (newToys: Toys) => void;
    deleteToys: (id: number) => void;
}

const SingleToy: FC<SingleToyProps> = ({ toy, updateToys, deleteToys }) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        deleteToys(toy.id);
    }

    return (
        <div className="toys-block">
            <div className="toy">
                <img src={`/images/${toy.img}`} alt={toy.title} />
                <h2>{toy.title}</h2>
                <p>{toy.price} <MdCurrencyRuble /></p>
            </div>
            <div className="toys-control">
                <MdModeEdit onClick={handleToggleEdit} />
                <MdDelete onClick={handleDelete} />
            </div>
            {
                edit ? <EditToysForm data={toy} updateToys={updateToys} handleToggleEdit={handleToggleEdit} /> : null
            }
        </div>
    )
}

export default SingleToy;