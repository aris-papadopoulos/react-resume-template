import React from 'react';

import { FaUser , FaStar, FaBriefcase, FaPhone, FaCloudDownloadAlt} from "react-icons/fa";

import { pages } from './helpers';
import { RESUME_URL } from './setup';

/**
*   @author Aris Papadopoulos <aris.ppd@gmail.com> 
*   Site menu, selects page to be displayed in "info" component
*/
const Menu = (props) => {

    const { links, menuCentered, menuStyle } = props;

    return (
        <div className={`menu ${menuStyle}`}>
            <ul style={(menuCentered) ? {justifyContent: 'center'} : null}>
                {(links.main) ? 
                    <li onClick={() => props.changeMenu(pages.main)} title="Main Info" className={(props.selected.sheetTitle === 'main') ? 'active' : ''}><FaUser /></li> : null
                }
                {(links.skill_set) ? 
                    <li onClick={() => props.changeMenu(pages.skill_set)} title="Skill Set" className={(props.selected.sheetTitle === 'skill_set') ? 'active' : ''}><FaStar /></li> : null
                }
                {(links.work_samples) ? 
                    <li onClick={() => props.changeMenu(pages.work_samples)} title="Work Samples" className={(props.selected.sheetTitle === 'work_samples') ? 'active' : ''}><FaBriefcase /></li> : null
                }
                {(links.contact) ? 
                    <li onClick={() => props.changeMenu(pages.contact)} title="Contact" className={(props.selected.sheetTitle === 'contact') ? 'active' : ''}><FaPhone /></li> : null
                }
                {(links.cv_download && RESUME_URL && RESUME_URL.length) ? 
                    <li className="download-cv" title="Download CV"><a href="https://drive.google.com/open?id=1M7BI3pr5Necs8BaV0AAGQCniKyTptdpd" target="_blank" rel="noopener noreferrer"><FaCloudDownloadAlt /></a></li> : null
                }
            </ul>
        </div>
    );
}


export default Menu;
