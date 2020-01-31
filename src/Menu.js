import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';


/**
*   @author Aris Papadopoulos <aris.ppd@gmail.com> 
*   Site menu, selects page to be displayed in "info" component
*/
const Menu = () => {

    const [selected, setSelected] = useState(0);

    function changeMenu(i) {
        setSelected(i);
    }

    return (
        <div className="menu">
            <ul>
                <li onClick={() => changeMenu('main')} className={(selected === 'main') ? 'selected' : ''}><FaUser /></li>
                <li onClick={() => changeMenu('work-samples')} className={(selected === 'work-samples') ? 'selected' : ''}><FaBriefcase /></li>
                <li onClick={() => changeMenu('articles')} className={(selected === 'articles') ? 'selected' : ''}><FaRegEdit /></li>
                <li onClick={() => changeMenu('interests')} className={(selected === 'work-samples') ? 'selected' : ''}><FaCoffee /></li>
                <li onClick={() => changeMenu('contact')} className={(selected === 'contact') ? 'selected' : ''}><FaPhone /></li>
            </ul>
        </div>
    );
}


export default Menu;
