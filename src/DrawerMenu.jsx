import React from "react";
import { useState } from "react";
import './DrawerMenu.css'

function MenuItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div onClick={handleClick} className="menu-item">
        {title}
        <span>{isOpen ? " ^ " : " > "}</span>
      </div>
      {isOpen && (
        <ul>
          {children.map((child) => (
            <li key={child.title}>
              <MenuItem title={child.title} children={child.children}/>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function NestedMenu() {
  const menuItems = [
    {
      title: "User",
      children: [
        {
          title: "Sub Item 1",
          children: [
            { title: "Sub Item 1.2", children: [] },
            { title: "Sub Item 1.3", children: [] },
          ],
        },
        { title: "Sub Item 2", children: [] },
      ],
    },
    
    {
      title: "Message",
      children: [ { title: "Sub Item 2", children: [] }],
    },
    {
      title: "Saved",
      children: [],
    },
    {
      title: "Setting",
      children: [
        {
          title: "Sub Item 1",
          children: [
            { title: "Sub Item 1.2", children: [] },
            { title: "Sub Item 1.3", children: [] },
          ],
        },
        { title: "Sub Item 2", children: [] },
      ],
    }
  ];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function handleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }
  return (
    <div className="menuDiv">
      {
   isOpenMenu && 
    <div  className="nested-menu">
      {menuItems.map((item) => (
        <MenuItem
        key={item.title}
        title={item.title}
        children={item.children}
        />
        ))}
    </div>
      }
    <button onClick={handleMenu} >Menu</button>
       </div>
  );
}

export default NestedMenu;
