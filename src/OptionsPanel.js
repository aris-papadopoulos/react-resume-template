import React, { useState } from 'react';


function OptionsPanel() {

    const [themeColor, setThemeColor] = useState('blue');

    const [MainPage, setMainPage] = useState(true);
    const [SkillsetPage, setSkillsetPage] = useState(true);
    const [WorksamplesPage, setWorksamplesPage] = useState(true);
    const [ContactPage, setContactPage] = useState(true);

    return (
        <div className="options-panel">
            <div className="color-select">
                <p>Select Theme Color</p>
                <div>
                    <span onClick={() => setThemeColor('blue')} className={`${(themeColor === 'blue' ? 'active' : '')} color blue`}></span>
                    <span onClick={() => setThemeColor('red')} className={`${(themeColor === 'red' ? 'active' : '')} color red`}></span>
                    <span onClick={() => setThemeColor('green')} className={`${(themeColor === 'green' ? 'active' : '')} color green`}></span>
                    <span onClick={() => setThemeColor('pink')} className={`${(themeColor === 'pink' ? 'active' : '')} color pink`}></span>
                </div>
            </div>
            <div className="section-switches">
                <p>Active Pages</p>
                <div>
                    <span className="page">Main</span>
                    <label className="switch">
                        <input type="checkbox" onClick={() => setMainPage(!MainPage)} checked={MainPage} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div>
                    <span className="page">Skill set</span>
                    <label className="switch">
                        <input type="checkbox" onClick={() => setSkillsetPage(!SkillsetPage)} checked={SkillsetPage} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div>
                    <span className="page">Work samples</span>
                    <label className="switch">
                        <input type="checkbox" onClick={() => setWorksamplesPage(!WorksamplesPage)} checked={WorksamplesPage} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div>
                    <span className="page">Contact</span>
                    <label className="switch">
                        <input type="checkbox" onClick={() => setContactPage(!ContactPage)} checked={ContactPage} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default OptionsPanel;
