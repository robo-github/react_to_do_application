import "./Components.css";

function TodoInput({ input, setInput, addTodo }) {
  return (
    <div className="input-component">
      <input
        type="text"
        placeholder="Enter the task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-field"
      />
      <button onClick={addTodo} className="add-btn">
        Add
      </button>
    </div>
  );
}

export default TodoInput;
