import React, { useState } from 'react';
import './App.css';

import Menu from './Menu';
import Person from './Person';
import Info from './Info';
import OptionsPanel from './OptionsPanel';

import { theme_color, active_sections, demo_mode } from './options';
import { pages } from './helpers';



const App = () => {

    const [selected, setSelected] = useState(pages.main);

    // For Demo Mode
    const [themeColor, setThemeColor] = useState(theme_color);
    const [sections, setSections] = useState(active_sections);


    function changeMenu(menuItem) {
        setSelected(menuItem);
    }

    return (
        <div className={`App ${themeColor}`}>
            <Menu selected={selected} changeMenu={changeMenu} sections={sections} />
            <Person />
            <Info selected={selected} />
            {(demo_mode) ? 
                <OptionsPanel 
                    themeColor={themeColor}
                    setThemeColor={setThemeColor}
                    sections={sections} 
                    setSections={setSections}
                />
                : null
            }
        </div>
    );
}

export default App;
