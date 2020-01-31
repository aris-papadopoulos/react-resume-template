import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';


/**
*   @author Aris Papadopoulos <aris.ppd@gmail.com> 
*   Site menu, selects page to be displayed in "info" component
*/
const Menu = (props) => {

    return (
        <div className="menu">
            <ul>
                <li onClick={() => props.changeMenu('main')} className={(props.selected === 'main') ? 'active' : ''}><FaUser /></li>
                <li onClick={() => props.changeMenu('work-samples')} className={(props.selected === 'work-samples') ? 'active' : ''}><FaBriefcase /></li>
                <li onClick={() => props.changeMenu('articles')} className={(props.selected === 'articles') ? 'active' : ''}><FaRegEdit /></li>
                <li onClick={() => props.changeMenu('interests')} className={(props.selected === 'interests') ? 'active' : ''}><FaCoffee /></li>
                <li onClick={() => props.changeMenu('contact')} className={(props.selected === 'contact') ? 'active' : ''}><FaPhone /></li>
            </ul>
        </div>
    );
}


export default Menu;
