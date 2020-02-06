import React, { useState } from 'react';
import './App.css';

import Menu from './Menu';
import Person from './Person';
import Info from './Info';

import { color_theme } from './options';
import { pages } from './helpers';



const App = () => {

    const [selected, setSelected] = useState(pages.main);

    function changeMenu(menuItem) {
        setSelected(menuItem);
    }
    return (
        <div className={`App ${color_theme}`}>
            <Menu selected={selected} changeMenu={changeMenu} />
            <Person />
            <Info selected={selected} />
        </div>
    );
}

export default App;
