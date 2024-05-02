import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/application/auth");
        if (res.status == 200) {
          setUser(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        setIsLoading(false);
      }
    };
    if(!user){

      verifyUser();
    }
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser,isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
