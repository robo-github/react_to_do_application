import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";
import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch todos
  useEffect(() => {
    axios.get(API_URL).then((res) => setTodos(res.data));
  }, []);

  //Add new todo
  const addTodo = async () => {
    if (input.trim() === "") return;
    const res = await axios.post(API_URL, { text: input });
    setTodos([...todos, res.data]);
    setInput("");
  };

  //Toggle Todo
  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t._id === id);
    const res = await axios.patch(`${API_URL}/${id}`, {
      completed: !todo.completed,
    });
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  return (
    <>
      <div className="todo-page">
        <h1 className="heading">To-Do App</h1>
        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
