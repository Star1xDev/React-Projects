import React, { useState } from 'react';
import "./TreeView.css"
import menus from './data';
import MenuItem from './MenuItem/MenuItem';

const TreeView = () => {
    
    return (
        <div className='side-nav'>
            {menus.map((item) => (
                <MenuItem key={item.label} info={item} />
            ))}
        </div>
    );
}

export default TreeView;
