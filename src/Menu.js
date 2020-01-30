import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';


function Menu() {
  return (
    <div className="menu">
        <ul>
            <li><FaUser /></li>
            <li><FaPhone /></li>
            <li><FaRegEdit /></li>
            <li><FaBriefcase /></li>
        </ul>
    </div>
  );
}

export default Menu;
