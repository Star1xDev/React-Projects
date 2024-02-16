import React, { useState } from 'react';
import "./MenuItem.css"
const MenuItem = ({info}) => {
    // const [children, setChildren] = useState([]);
    const [show, setShow] = useState(false);

    const handleShowChildren = (info, e) => {
        e.stopPropagation();
        // if (!show) {
        //     setChildren(info?.children);
        //     setShow(!show);
        // } else {
        //     setChildren([]);
        //     setShow(!show);
        // }
        setShow(!show);
    }
    return (
        <li onClick={(e) => handleShowChildren(info, e)}>
            {info.label} {info.children && !show ? "+" : null}
            {info.children && show ? "-" : null}
            <ul>
            { show && info.children && info.children.map((child) => (
                  <MenuItem key={child.label} info={child} />
            ))}
            </ul>
        </li>
    );
}

export default MenuItem;
