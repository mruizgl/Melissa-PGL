import logo from './logo.svg';

import { useState } from 'react';

function App() {

  const [todo, settodo] = useState([])

  function addTodo(newtodo) {
    settodo( [...todo, newtodo] )
  }

  function deleteTodo(task) {
    var index = todo.indexOf(task);
    todo.splice(index, 1);
    settodo([...todo]);
  }

  return (
    <div className="App">
      <input type="text" id="input-todo"></input>
      <button onClick={() =>addTodo(document.getElementById("input-todo").value)}>Añadir tarea</button>
      <ul>
        {todo.map(todo => (
          <div>
            <li>{todo}</li>
            <p onClick={() => deleteTodo({todo})}>Eliminar</p>
          </div>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
