import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';


/**
*   @author Aris Papadopoulos <aris.ppd@gmail.com> 
*   Site menu, selects page to be displayed in "info" component
*/
const Menu = (props) => {

    return (
        <div className="menu">
            <ul>
                <li onClick={() => props.changeMenu({sheetTitle: 'main', range: 'A:D'})} className={(props.selected.sheetTitle === 'main') ? 'active' : ''}><FaUser /></li>
                <li onClick={() => props.changeMenu({sheetTitle: 'work-samples', range: 'A:C'})} className={(props.selected.sheetTitle === 'work-samples') ? 'active' : ''}><FaBriefcase /></li>
                <li onClick={() => props.changeMenu({sheetTitle: 'articles', range: 'A:C'})} className={(props.selected.sheetTitle === 'articles') ? 'active' : ''}><FaRegEdit /></li>
                <li onClick={() => props.changeMenu({sheetTitle: 'contact', range: 'A:B'})} className={(props.selected.sheetTitle === 'contact') ? 'active' : ''}><FaPhone /></li>
            </ul>
        </div>
    );
}


export default Menu;
