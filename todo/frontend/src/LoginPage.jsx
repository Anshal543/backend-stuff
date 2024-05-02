import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
axios.defaults.withCredentials = true;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser,isLoading } = useContext(UserContext);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if(isLoading){
    return <div>Loading...</div>
  }
  if(user){
    // navigate('/')
    window.location.href = '/'
    return
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/application/login", {
        email,
        password,
      });

      if (res.status == 200) {
        console.log(res);
        window.location.reload(true);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center" >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email:</label>
          <input className="border-2 border-gray-500"
            type="text"
            value={email}
            onChange={handleUsernameChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label>Password:</label>
          <input className="border-2 border-gray-500"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
