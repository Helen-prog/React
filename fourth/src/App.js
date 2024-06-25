import './App.css';
// import Counter from './Counter';
// import Person from './Person';
// import Modal from './Modal';
// import Item from "./Item";
// import Task from './Task';
// import Form from './Form';
// import { useState } from "react";
import Text from './Text';

function App() {
  // let [isCounter, setCounter] = useState(true);
  // let [tasks, setTasks] = useState([
  //   {
  //     text: "Выучить JavaScript",
  //     done: false
  //   },
  //   {
  //     text: "Познакомиться с React",
  //     done: false
  //   },
  //   {
  //     text: "Устроиться на работу",
  //     done: false
  //   },
  // ]);

  // let addTask = text => {
  //   let newTask = [...tasks, { text }]
  //   setTasks(newTask);
  // }

  // let doneTask = index => {
  //   let newTask = [...tasks];
  //   newTask[index].done = !newTask[index].done;
  //   setTasks(newTask);
  // }

  // let deleteTask = index => {
  //   let newTask = [...tasks];
  //   newTask.splice(index, 1);
  //   setTasks(newTask);
  // }

  return (
    <div className="App">
      <Text />
      {/* <button onClick={() => setCounter(!isCounter)}>Toggle counter</button>
      {isCounter && <Counter />} */}
      
      {/*<Person /> 
      <Modal />
      <Item />

      <div className="task-list">
        {
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              index={index}
              doneTask={doneTask}
              deleteTask={deleteTask}
            />
          ))
        }
        <Form addTask={addTask} />
      </div>*/}
    </div>
  );
}

export default App;
