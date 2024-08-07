import {IUser} from '../types/types';
import UserItem from './UserItem';

interface UserListProps {
    users: IUser[]
}


function UserList({users}: UserListProps){
    return (
        <div>
            {
                users.map(user => 
                    <UserItem key={user.id} user={user} />
                )
            }
        </div>
    )
}

export default UserList;