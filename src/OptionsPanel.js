import React from 'react';


function OptionsPanel(props) {

    const { themeColor, setThemeColor, sections, setSections } = props;

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
                        <input type="checkbox" onClick={() => setSections({...sections, main: !sections.main })} checked={sections.main} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div>
                    <span className="page">Skill set</span>
                    <label className="switch">
                        <input type="checkbox" onClick={() => setSections({...sections, skill_set: !sections.skill_set })} checked={sections.skill_set} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div>
                    <span className="page">Work samples</span>
                    <label className="switch">
                        <input type="checkbox" onClick={() => setSections({...sections, work_samples: !sections.work_samples })} checked={sections.work_samples} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div>
                    <span className="page">Contact</span>
                    <label className="switch">
                        <input type="checkbox" onClick={() => setSections({...sections, contact: !sections.contact })} checked={sections.contact} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default OptionsPanel;
