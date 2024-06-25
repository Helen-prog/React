import { useState } from "react";
import './Modal.css';

function Modal() {
    let [open, setOpen] = useState(false);

    let image = "https://images.unsplash.com/photo-1698700237106-005e55484241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJlZCUyMGFlc3RoZXRpY3N8ZW58MHx8MHx8fDA%3D";

    return (
        <div>
            <img src={image} alt="" className="small"
                onClick={() => setOpen(true)}
                style={{ display: open ? "none" : "block" }} />

            {open && (<div>
                <img src={image} alt="" className="big"
                    onClick={() => setOpen(false)} />
            </div>)}

        </div>
    )
}

export default Modal;