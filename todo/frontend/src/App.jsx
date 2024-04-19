import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null); // Track which todo is being edited
  const [editText, setEditText] = useState(""); // Store the edited text

  useEffect(() => {
    fetch("http://localhost:3000")
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const handleClick = () => {
    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo }),
    })
      .then(response => response.json())
      .then(data => {
        setTodos([...todos, data]);
        setNewTodo("");
      });
  };

  const toggleTodo = (id) => {
    fetch(`http://localhost:3000/${id}`, { method: 'PATCH' })
      .then(response => response.json())
      .then(updatedTodo => {
        setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
      });
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/${id}`, { method: 'DELETE' })
      .then(() => setTodos(todos.filter(todo => todo.id !== id)));
  };

  const startEditing = (todo) => {
    setEditTodoId(todo.id);
    setEditText(todo.title);
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:3000/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: editText }),
    })
      .then(response => response.json())
      .then(updatedTodo => {
        setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
        setEditTodoId(null); // Exit editing mode
      });
  };

  const renderTodo = (todo) => {
    if (editTodoId === todo.id) {
      return (
        <div key={todo.id} className="todo-container">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="update-input"
          />
          <button onClick={() => handleUpdate(todo.id)} className="update-button">Save</button>
          <button onClick={() => setEditTodoId(null)} className="cancel-button">Cancel</button>
        </div>
      );
    } else {
      return (
        <div key={todo.id} className="todo-container">
          <h1 className={todo.completed ? "todo-title todo-completed" : "todo-title todo-not-completed"}>
            {todo.title}
          </h1>
          <button onClick={() => toggleTodo(todo.id)} className="todo-button">
            {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
          </button>
          <button onClick={() => startEditing(todo)} className="todo-button">Edit</button>
          <button onClick={() => deleteTodo(todo.id)} className="todo-button">Delete</button>
        </div>
      );
    }
  };

  return (
    <>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        className="todo-input"
      />
      <button onClick={handleClick} className="todo-button">Add Todo</button>
      {todos.map(renderTodo)}
    </>
  );
}

export default App;
