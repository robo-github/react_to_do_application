import TodoItems from "./TodoItems";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {todos.length === 0 ? (
        <p
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "18px",
            fontWeight: "300",
          }}
        >
          No tasks yet. Add one!
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
