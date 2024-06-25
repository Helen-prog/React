import { useEffect, useState } from 'react';
import './App.css';
import Users from './components/users/Users';
import Success from './components/success/Success';


function App (){
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [invites, setInvites] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(json => {
            setUsers(json.data)
        })
        .catch(err => {
            console.warn(err);
            alert("Ошибка получения пользователей");
        })
    }, []);

    const onChangeValue = (event) => {
        setSearchValue(event.target.value);
    }

    const onClickSendInvites = () => {
        setSuccess(true);
    }

    const onClickInvite = (id) => {
        if(invites.includes(id)){
            setInvites(prev => prev.filter(ch => ch !== id));
        }
        else{
            setInvites(prev => [...prev, id]);
        }
    }

    return(
        <div className="main">
            {
                success ? 
                <Success count={invites.length} /> :  
                <Users 
                    items={users}
                    searchValue={searchValue}
                    onChangeValue={onChangeValue}
                    invites={invites} 
                    onClickInvite={onClickInvite}
                    onClickSendInvites={onClickSendInvites} 
                    />
            }
           
        </div>
    )
}

export default App;