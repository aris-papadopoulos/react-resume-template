import React, { useState } from 'react';
import './App.css';

import Menu from './Menu';
import Person from './Person';
import Info from './Info';

import { pages } from './helpers';



const App = () => {

    const [selected, setSelected] = useState(pages.main);

    function changeMenu(menuItem) {
        setSelected(menuItem);
    }

    return (
        <div className="App">
        <header className="App-header">
            <Menu selected={selected} changeMenu={changeMenu} />
            <Person />
            <Info selected={selected} />
        </header>
        </div>
    );
}

export default App;
