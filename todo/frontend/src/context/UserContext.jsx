import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
          console.log("user verify");
          const res = await axios.get(
            "http://localhost:5000/application/verify"
          );
          console.log("user verify1");
          if (res.status == 200) {
            setUser(res.data);
          }
        } catch (error) {
          console.log(error.response.data);
        } finally {
          setIsLoading(false);
        }
      };
      
      if (!user) {
      verifyUser();
    }
  }, [user, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
