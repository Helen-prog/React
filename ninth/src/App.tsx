import { useState, useEffect } from 'react';
import './App.css';
// import Card, { CardVariant } from './components/Card';
// import UserList from './components/UserList';
import List from './components/List';
import UserItem from './components/UserItem';
import {IUser, ITodo} from './types/types';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, []);

  return (
    <div className="App">
      <EventsExample />
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
      {/* <UserList users={users} /> */}
      {/* <Card onClick={() => console.log("Сообщение")} width='200px' height='200px' variant={CardVariant.otlined}>
        <button>Кнопка</button>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum recusandae, quis, nihil non quod dolor dicta eos beatae necessitatibus cumque nostrum iure! </p>
      </Card>
      <Card width='200px' height='200px' variant={CardVariant.primary} /> */}

    </div>
  );
}

export default App;
