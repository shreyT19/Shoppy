import React, { useEffect, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import { MdOutlineCancel } from 'react-icons/md';
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";


import { MdKeyboardArrowDown } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";

// title ⇒ Title for the button,
//  customFunc ⇒ handlerFunction,
// icon ⇒ icon of the button,
//  color ⇒ color,
// dotColor⇒ notification dot color

//custom component for button --> Helps manage states and props drilling
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ backgroundColor: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    handleProfile,
    profile,
    handleChat,
    handleNotification,
    chat,notification
   
  } = useStateContext();

  // setting up navbar acc to screen size
  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    //for initial render we need to calculate the width
    handleWindowResize();

    //cleanup function

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* Section 1 */}
      {/* Menu Button */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      {/* Section 2 */}
      {/* Cart Button */}
     <div className="flex">
         <NavButton
          
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        /> 
        {/* Chat Button */}
        <NavButton
          title="Chat"
          // customFunc={() => handleClick("chat")}
          customFunc={handleChat}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />

        {/* Notification Button */}
        <NavButton
          title="Notification"
          // customFunc={() => handleClick("notification")}
          customFunc={handleNotification}
          color={currentColor}
          dotColor="orange"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            // onClick={() => handleClick("userProfile")}
            onClick={handleProfile}
          >
            <img className="rounded-full h-8 w-8" src={avatar} alt="" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Shreyansh
              </span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {chat && <Chat />}
        {notification && <Notification />}
        {profile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
