import React, { useState } from 'react';
import "./Tabs.css"

const Tabs = ({tabsContent}) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
        <div className='tabs-container'>
            <div className="tabs-headings">
                {tabsContent.map((tab, index) => (
                    <h2 key={tab.label} className={currentTabIndex === index ? "tab-header active" : "tab-header"} onClick={() => setCurrentTabIndex(index)}> {tab.label} </h2>
                ))}
            </div>
            <div className="tabs-content">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    );
}

export default Tabs;
