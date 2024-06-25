import { useState } from "react";

function Person() {
    let [person, setPerson] = useState({
        firstName: 'Igor',
        lastName: 'Smith'
    });

    function rename(){
        setPerson({ ...person, firstName: 'Sergey'})
    }

    return (
        <div>
            <h2>{person.firstName} {person.lastName}</h2>
            <button onClick={rename}>Rename</button>
        </div>
    )
}

export default Person;