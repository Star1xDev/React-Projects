import React, { useEffect, useState } from 'react';
import "./ScrollIndicator.css"

const ScrollIndicator = ({getUrl}) => {
    const [data, setData] = useState();
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchdata = (url) => {
        fetch(url).then(res => res.json())
        .then(data => setData(data.products))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log("useeffect called");
        fetchdata(getUrl);
    }, [getUrl])

    const handleScrollPercentage = () => {
        console.table(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight);
        const howMuchScrolled = document.body.scrolltop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        return () => {
            window.removeEventListener("scroll", () => {});
        }
    },[])

    console.log("scroll %: ",scrollPercentage)

    return (
        <div className='ScrollIndicator-container'>
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-bar-container">
                <div className="current-progress-bar" style={{width: `${scrollPercentage}%`}}></div>
            </div>
            <div className="data-container">
            {data && data.length !== 0 && data.map((item) => (
                <div key={item.id}>
                    {item.id +"  "+ item.title}
                </div>
            ))}
            </div>
        </div>
    );
}

export default ScrollIndicator;
