import React, { useState } from 'react';

import { FaAngleUp } from 'react-icons/fa';


function OptionsPanel(props) {

    const [open, setOpen] = useState(true);

    const { themeColor, setThemeColor, links, setLinks, menuCentered, setMenuPosition, menuStyle, setMenuStyle } = props;

    return (
        <div className={`options-panel ${(open) ? 'active' : ''}`}>
            <div className="toggle-menu" onClick={() => setOpen(!open)}>
                <h3>Theme Options</h3>
                <FaAngleUp />
            </div>
            <div className="options">
                <div className="color-select">
                    <p>Select Theme Color</p>
                    <div>
                        <span onClick={() => setThemeColor('blue')} className={`${(themeColor === 'blue' ? 'active' : '')} color blue`}></span>
                        <span onClick={() => setThemeColor('red')} className={`${(themeColor === 'red' ? 'active' : '')} color red`}></span>
                        <span onClick={() => setThemeColor('green')} className={`${(themeColor === 'green' ? 'active' : '')} color green`}></span>
                        <span onClick={() => setThemeColor('pink')} className={`${(themeColor === 'pink' ? 'active' : '')} color pink`}></span>
                    </div>
                </div>
                <div className="menu-style">
                    <p>Menu Style</p>
                    <div>
                        <span onClick={() => setMenuStyle('style1')} className={`menu-position-option ${(menuStyle === 'style1') ? 'active' : ''}`}>Style 1</span>
                        <span onClick={() => setMenuStyle('style2')} className={`menu-position-option ${(menuStyle === 'style2') ? 'active' : ''}`}>Style 2</span>
                    </div>
                </div>
                <div className="menu-position">
                    <p>Menu Position</p>
                    <div>
                        <span onClick={() => setMenuPosition(true)} className={`menu-position-option ${(menuCentered) ? 'active' : ''}`}>Center</span>
                        <span onClick={() => setMenuPosition(false)} className={`menu-position-option ${(menuCentered) ? '' : 'active'}`}>Start</span>
                    </div>
                </div>
                <div className="section-switches">
                    <p>Active Links</p>
                    <div>
                        <span className="page">Main</span>
                        <label className="switch">
                            <input type="checkbox" onClick={() => setLinks({...links, main: !links.main })} defaultChecked={links.main} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <span className="page">Skill set</span>
                        <label className="switch">
                            <input type="checkbox" onClick={() => setLinks({...links, skill_set: !links.skill_set })} defaultChecked={links.skill_set} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <span className="page">Work samples</span>
                        <label className="switch">
                            <input type="checkbox" onClick={() => setLinks({...links, work_samples: !links.work_samples })} defaultChecked={links.work_samples} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <span className="page">Contact</span>
                        <label className="switch">
                            <input type="checkbox" onClick={() => setLinks({...links, contact: !links.contact })} defaultChecked={links.contact} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <span className="page">CV download</span>
                        <label className="switch">
                            <input type="checkbox" onClick={() => setLinks({...links, cv_download: !links.cv_download })} defaultChecked={links.cv_download} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OptionsPanel;
