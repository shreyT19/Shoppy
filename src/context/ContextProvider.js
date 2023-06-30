import { createContext, useContext, useState, useEffect } from "react";

export const StateContext = createContext();

//these are the initial states of nav bar components which will change on mouse click
const initialState = {
  // chat: false,
  cart: false,
  // profile:false,
  // notification: false,
};

export const ContextProvider = ({ children }) => {
  //for menu
  const [activeMenu, setActiveMenu] = useState(true);

  //for button click actions
  const [isClicked, setIsClicked] = useState(initialState);

  //screenSize state
  const [screenSize, setScreenSize] = useState(undefined);

  //themeBar state
  const [themeSettings, setThemeSettings] = useState(false);

  // to set color
  const [currentColor, setCurrentColor] = useState("#03C9D7");

  //to set light/dark mode
  const [currentMode, setCurrentMode] = useState("Light");

  //handling button click actions
  const handleClick = (clickedElement) => {
    setIsClicked({ ...initialState, [clickedElement]: true });
    setProfile(false)
    setChat(false)
    setNotification(false)
  };


  const [profile,setProfile] = useState(false);
  const [notification,setNotification] = useState(false);
  const [chat,setChat] = useState(false);

  const handleProfile = ()=>{
    setProfile(!profile)
    setChat(false)
    setNotification(false)
  }
  const handleNotification = ()=>{
    setNotification(!notification)
    setChat(false)
    setProfile(false)
  }
  const handleChat = ()=>{
    setChat(!chat)
    setNotification(false)
    setProfile(false)
  }

  //TO TOGGLE LIGHT/DARK MODE
  const setMode = (event) => {
    setCurrentMode(event.target.value);

    setThemeSettings(false);
    localStorage.setItem("currThemeMode", currentMode);
  };

  // TO TOGGLE COLOR MODE
  const setColor = (color) => {
    setCurrentColor(color);
    setThemeSettings(false);
    localStorage.setItem("currThemeColor", currentColor);
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
        setScreenSize,
        themeSettings,
        setThemeSettings,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        setColor,
        setMode,
        profile,setProfile,
        handleProfile
        ,notification,setNotification,chat,setChat,handleNotification,handleChat

      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//custom hook to call the useContext hook
// instead of importing "useContext" and passing "StateContext" we have initialized a custom hook to speed up the process and reduce unnecessary imports

export const useStateContext = () => useContext(StateContext);
