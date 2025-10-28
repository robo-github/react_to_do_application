import "./Components.css";

function TodoItems({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <p
        className="todo-text"
        style={{
          flex: 1,
          textAlign: "center",
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "rgba(255, 255, 255, 0.5)" : "#ffffff",
          fontSize: "16px",
          fontWeight: "500",
          margin: "0 15px",
        }}
      >
        {todo.text}
      </p>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        🗑️
      </button>
    </div>
  );
}

export default TodoItems;
