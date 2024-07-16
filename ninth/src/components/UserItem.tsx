import {IUser} from "../types/types";

function UserItem({user}: {user: IUser}){
    return (
        <div style={{textAlign: "left", padding: 15, border: "1px solid gray"}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default UserItem;