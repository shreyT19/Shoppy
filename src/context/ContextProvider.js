import { createContext, useContext, useState,useEffect } from "react";

export const StateContext = createContext();

//these are the initial states of nav bar components which will change on mouse click
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  //for menu
  const [activeMenu, setActiveMenu] = useState(true);

  //for button click actions
  const [isClicked, setIsClicked] = useState(initialState);

  //screenSize state
  const [screenSize, setScreenSize] = useState(undefined);

  //handling button click actions
  const handleClick = (clickedElement) => {
    setIsClicked({ ...initialState, [clickedElement]: true });
  };

  

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//custom hook to call the useContext hook
// instead of importing "useContext" and passing "StateContext" we have initialized a custom hook to speed up the process and reduce unnecessary imports

export const useStateContext = () => useContext(StateContext);
