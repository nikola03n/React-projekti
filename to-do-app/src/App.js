import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <header>
        <h1>TO-DO list</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
