import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

import { pages } from './helpers';

/**
*   @author Aris Papadopoulos <aris.ppd@gmail.com> 
*   Site menu, selects page to be displayed in "info" component
*/
const Menu = (props) => {

    const { sections } = props;

    return (
        <div className="menu">
            <ul>
                {(sections.main) ? 
                    <li onClick={() => props.changeMenu(pages.main)} className={(props.selected.sheetTitle === 'main') ? 'active' : ''}><FaUser /></li> : null
                }
                {(sections.skill_set) ? 
                    <li onClick={() => props.changeMenu(pages.skill_set)} className={(props.selected.sheetTitle === 'skill-set') ? 'active' : ''}><FaStar /></li> : null
                }
                {(sections.work_samples) ? 
                    <li onClick={() => props.changeMenu(pages.work_samples)} className={(props.selected.sheetTitle === 'work-samples') ? 'active' : ''}><FaBriefcase /></li> : null
                }
                {(sections.contact) ? 
                    <li onClick={() => props.changeMenu(pages.contact)} className={(props.selected.sheetTitle === 'contact') ? 'active' : ''}><FaPhone /></li> : null
                }
            </ul>
        </div>
    );
}


export default Menu;
