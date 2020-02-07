import React, { useState } from 'react';
import './App.css';

import Menu from './Menu';
import Person from './Person';
import Info from './Info';
import OptionsPanel from './OptionsPanel';

import { theme_color, active_links, centeredMenu, demo_mode } from './options';
import { pages } from './helpers';



const App = () => {

    const [selected, setSelected] = useState(pages.main);

    // For Demo Mode
    const [themeColor, setThemeColor] = useState(theme_color);
    const [links, setLinks] = useState(active_links);
    const [menuCentered, setMenuPosition] = useState(centeredMenu);


    function changeMenu(menuItem) {
        setSelected(menuItem);
    }

    return (
        <div className={`App ${themeColor}`}>
            <Menu selected={selected} changeMenu={changeMenu} links={links} menuCentered={menuCentered} />
            <Person />
            <Info selected={selected} />
            {(demo_mode) ? 
                <OptionsPanel 
                    themeColor={themeColor}
                    setThemeColor={setThemeColor}
                    links={links} 
                    setLinks={setLinks}
                    menuCentered={menuCentered}
                    setMenuPosition={setMenuPosition}
                />
                : null
            }
        </div>
    );
}

export default App;
