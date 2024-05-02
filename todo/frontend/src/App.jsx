import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import LoginPage from './LoginPage'

const App = () => {
  const {user,setUser} = useContext(UserContext)

  return (
    <div>
     {
        user&& <h1>Welcome {user.rest.username}</h1>
     }
    </div>
  )
}

export default App


// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import LoginPage from "./LoginPage";
// import axios from "axios";
// axios.defaults.withCredentials = true;
// import { UserContext } from "./context/UserContext";
// // import VerifyLogin from "./VerifyLogin";
// import { Navigate } from "react-router-dom";

// // const Page = () => {
// //   const [isLoading, setIsLoading] = useState(true);
// //   const { user, setUser } = useContext(UserContext);

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const verifyUser = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/application/verify");
// //         console.log("user verify1");
// //         if (res.status == 200) {
// //           setUser(res.data);
// //           // navigate("/welcome");

// //         }
// //       } catch (error) {
// //         console.log(error.response.data);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //      if (!user) {
// //         verifyUser();
// //         // navigate("/welcome");
// //       }

// //   }, [user]);
// //   if (isLoading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>{
// //       user? <h1>Welcome {user.rest.username}</h1> : <LoginPage />
// //       }
// //     </div>
// //   );

// // };

// const App = () => {
//   const { user,isLoading } = useContext(UserContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 

//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
 

//   if(isLoading){
//     return <div>Loading...</div>
//   }
//   if(user){
//     window.location.href="/welcome";
//     return
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/application/login", {
//         email,
//         password,
//       });

//       if(res.status==200){
//        console.log(res);
//         window.location.href="/welcome";
//      }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //   const navigate = useNavigate();

//   //   const [todos, setTodos] = useState([]);
//   //   const [newTodo, setNewTodo] = useState("");
//   //   const [category, setCategory] = useState("");
//   //   const [categories, setCategories] = useState([]);
//   //   const [selectedCategory, setSelectedCategory] = useState('');

//   //   useEffect(() => {
//   //     // Fetch all todos initially
//   //     const getTasks = async () => {
//   //       const data = await axios.get('/todos');
//   //       setTodos(data.data);

//   //       // Extracting categories from todos and adding them to categories state
//   //       const allCategories = data.data.map(todo => todo.category);
//   //       const uniqueCategories = [...new Set(allCategories)];
//   //       setCategories(uniqueCategories);
//   //     };

//   //     if(!selectedCategory) {
//   //       getTasks();
//   //     }

//   // }, [todos]);

//   //   const handlenewTodo = async (e) => {
//   //     e.preventDefault();

//   //     if (!newTodo.trim() || !category.trim()) return;

//   //     const data = await axios.post("/todos", {
//   //       title: newTodo,
//   //       category: category,
//   //     });
//   //     setTodos([...todos, data.data]);
//   //     setNewTodo("");
//   //     setCategory("");
//   //   };

//   //   const deleteTodo = async (id) => {
//   //     await axios.delete(`/todos/${id}`);
//   //     setTodos(todos.filter((todo) => todo._id !== id));
//   //   };

//   //   const handleCategoryChange =async (e) => {
//   //     const selectedValue = e.target.value;
//   //     setSelectedCategory(selectedValue);
//   //     console.log(selectedValue); // Log the selected category here
//   //     // axios

//   //    const res =  await axios.get(`/todos/category?category=${selectedValue}`)
//   //    setTodos(res.data)
//   //   };

//   // useEffect(()=>{},[user])

//   return (
//     <>
    

//       <div>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>email:</label>
//             <input
//               type="text"
//               value={email}
//               onChange={handleUsernameChange}
//               autoComplete="off"
//               />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={handlePasswordChange}
//               autoComplete="off"
//               />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
// {
//   // user? <h1>Welcome {user.rest.username}</h1> : <LoginPage />
// }



//     </>
//     // <div>
//     //   <div>
//     //     <h1>category</h1>

//     //     <select value={selectedCategory} onChange={handleCategoryChange}>
//     //     <option value="">Select Category</option>
//     //     {categories.map((cat, index) => (
//     //       <option key={index} value={cat}>{cat}</option>
//     //     ))}
//     //   </select>

//     //   </div>
//     //   <div>
//     //     <form action="" onSubmit={handlenewTodo}>
//     //       <input
//     //         value={newTodo}
//     //         onChange={(e) => setNewTodo(e.target.value)}
//     //         type="text"
//     //         name=""
//     //         id=""
//     //       />
//     //       <input
//     //         value={category}
//     //         onChange={(e) => setCategory(e.target.value)}
//     //         type="text"
//     //         name=""
//     //         id=""
//     //       />
//     //       <button type="submit">add todo</button>
//     //     </form>

//     //     {todos.map((todo) => (
//     //       <div key={todo._id}>
//     //         <h1 key={todo._id}>
//     //           {todo.title}--{todo.category}
//     //         </h1>
//     //         <button onClick={() => deleteTodo(todo._id)}>delete todo</button>
//     //         <button onClick={() => navigate(`/todos/update/${todo._id}`)}>
//     //           edit todo
//     //         </button>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//     // <div>

//     //   {/* <LoginPage /> */}

//     // </div>
//   );
// };

// export default App;

// // export default LoginPage;

// /*
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editTodoId, setEditTodoId] = useState(null); 
//   const [editText, setEditText] = useState(""); 

//   useEffect(() => {
//     fetch("http://localhost:3000")
//       .then(response => response.json())
//       .then(data => setTodos(data));
//   }, []);

//   const handleClick = () => {
//     fetch("http://localhost:3000", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title: newTodo }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         setTodos([...todos, data]);
//         setNewTodo("");
//       });
//   };

//   const toggleTodo = (id) => {
//     fetch(`http://localhost:3000/${id}/toggle`, { method: 'PATCH' })
//       .then(response => response.json())
//       .then(updatedTodo => {
//         setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
//       });
//   };

//   const deleteTodo = (id) => {
//     fetch(`http://localhost:3000/${id}`, { method: 'DELETE' })
//       .then(() => setTodos(todos.filter(todo => todo.id !== id)));
//   };

//   const startEditing = (todo) => {
//     setEditTodoId(todo.id);
//     setEditText(todo.title);
//   };

//   const handleUpdate = (id) => {
//     fetch(`http://localhost:3000/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title: editText }),
//     })
//       .then(response => response.json())
//       .then(updatedTodo => {
//         setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
//         setEditTodoId(null); 
//       });
//   };

//   const renderTodo = (todo) => {
//     if (editTodoId === todo.id) {
//       return (
//         <div key={todo.id} className="todo-container">
//           <input
//             type="text"
//             value={editText}
//             onChange={(e) => setEditText(e.target.value)}
//             className="update-input"
//           />
//           <button onClick={() => handleUpdate(todo.id)} className="update-button">Save</button>
//           <button onClick={() => setEditTodoId(null)} className="cancel-button">Cancel</button>
//         </div>
//       );
//     } else {
//       return (
//         <div key={todo.id} className="todo-container">
//           <h1 className={todo.completed ? "todo-title todo-completed" : "todo-title todo-not-completed"}>
//             {todo.title}
//           </h1>
//           <button onClick={() => toggleTodo(todo.id)} className="todo-button">
//             {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
//           </button>
//           <button onClick={() => startEditing(todo)} className="todo-button">Edit</button>
//           <button onClick={() => deleteTodo(todo.id)} className="todo-button">Delete</button>
//         </div>
//       );
//     }
//   };

//   return (
//     <>
//       <input
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         type="text"
//         className="todo-input"
//       />
//       <button onClick={handleClick} className="todo-button">Add Todo</button>
//       {todos.map(renderTodo)}
//     </>
//   );
// }

// export default App;

// */
