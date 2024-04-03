import React, { createContext, useContext, useReducer } from "react";

import { friendsReducer, initialState } from "./friendsReducer";

export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

export const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(friendsReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// connect store with localStorage
// write toggle instead of add/remove methods
