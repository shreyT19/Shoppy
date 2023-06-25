import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

//these are the initial states of nav bar components which will change on mouse click
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

//custom hook to call the useContext hook
// instead of importing "useContext" and passing "StateContext" we have initialized a custom hook to speed up the process and reduce unnecessary imports  

export const useStateContext = () => useContext(StateContext);
