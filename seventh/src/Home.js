import { useState } from "react";
import Item from "./Item";
import './Home.css';

function Home(){
    let [items, setItems] = useState([
        {
            text: "Apple",
            done: false
        },
        {
            text: "Banana",
            done: false
        },
        {
            text: "Tea",
            done: false
        },
        {
            text: "Coffee",
            done: false
        },
    ]);

    let doneItem = index => {
        let newItem = [...items];
        newItem[index].done = !newItem[index].done;
        setItems(newItem);
    }

    return (
        <div>
            <h2>Home Page</h2>
            <div className="container">
                <div>
                    <h3>Shopping list:</h3>
                    {
                        items.map((item, index) => (
                            <Item key={index} item={item} index={index} doneItem={doneItem} />
                        ))
                    }
                </div>
                <hr />
                <h4 className="block">
                    <span>Total Completed:</span>
                    <span>{items.filter((item) => item.done).length}</span>
                </h4>
            </div>
        </div>
    )
}

export default Home;