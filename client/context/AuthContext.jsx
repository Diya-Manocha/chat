import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

export const AuthProvider = ({ Children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [authUser, setAuthUser] = useState(null);
  const [onlineUsers, setOnline] = useState([]);
  const [socket, setSocket] = useState(null);

  const checkAuth = async () => {
    try {
      const { data } = await axios.get("/api/auth/check");
      if (data.success) {
        setAuthUser(data.user);
      }
    } catch (error) {
        toast.error(error.message)
    }
  };
  const value = {
    axios,
    authUser,
    onlineUsers,
    socket,
  };
  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
};
