import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
     
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    
      <li>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </li>
    
      <li>
        <Link href="/fleet-services">
          <a>Fleet Services</a>
        </Link>
      </li>
    
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    
    </ul>
  );
};

export default NavLinks;
