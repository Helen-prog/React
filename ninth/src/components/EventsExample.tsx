import { useState } from "react";

function EventsExample(){
    const [value, setValue] = useState<string>("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    return(
        <div>
            <input 
                type="text"
                value={value}
                onChange={changeHandler}
            />
            <button onClick={clickHandler}>Button</button>
        </div>
    )
}

export default EventsExample;