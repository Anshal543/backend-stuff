import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateTodo from './components/UpdateTodo.jsx'
import { UserProvider } from './context/UserContext.jsx'
import LoginPage from './LoginPage.jsx'
import Navbar from './components/Navbar.jsx'
import UpdatePage from './Pages/UpdatePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/update' element={<UpdatePage />} />
      {/* <Route path='/todos/update/:id' element={<UpdateTodo />} /> */}
      {/* <Route path='/welcome' element={<Welcom/>} /> */}
    {/* <App /> */}
    </Routes>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
