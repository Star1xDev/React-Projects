import React from 'react';
import "./Tab-test.css"
import Tabs from './Tabs';

const TabTest = () => {
    const tabs = [
        {
          label: "Tab 1",
          content: <div>This is content for Tab 1</div>,
        },
        {
          label: "Tab 2",
          content: <div>This is content for Tab 2</div>,
        },
        {
          label: "Tab 3",
          content: <div>this is contnet fortab 3</div> ,
        },
      ];
    
      function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
      }
    
      return <Tabs tabsContent={tabs} />;
}

export default TabTest;
