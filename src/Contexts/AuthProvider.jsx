import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const [authenticated, setAuthenticated_] = useState(true);

  const setToken = (authToken) => {
    setToken_(authToken);
  };

  const setAuthenticated = (httpStatusCode) => {
    setAuthenticated_(httpStatusCode === 401 ? false : true);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      authenticated,
      setAuthenticated,
    }),
    [token, authenticated]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
