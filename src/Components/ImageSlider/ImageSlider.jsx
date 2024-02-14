import React, { useState, useEffect } from 'react';
import "./ImageSlider.css";

const ImageSlider = () => {
  const [imageList, setImageList] = useState([]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  let currentImg = "";
  currentImg = imageList[currentImgIndex]?.download_url;

  useEffect(() => {
    const fetchImages = (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setImageList([...data]);  
        })
        
    };

    fetchImages("https://picsum.photos/v2/list?page=4&limit=10");

  }, []);


  const handlePrevImg = () => {
    if (currentImgIndex > 0) {
        setCurrentImgIndex(prev => prev - 1)
    } else {
        setCurrentImgIndex(imageList.length - 1)
    }
  }

  const handleNextImg = () => {
    if (currentImgIndex < imageList.length) {
        setCurrentImgIndex(prev => prev + 1)
    } else {
        setCurrentImgIndex(0)
    }
  }

  return (
    <>
    <div className='slider'>
      <img src={currentImg} />
      <div className="slider-circles">
        {imageList.map((_, index) => (
          <span key={index} className={index === currentImgIndex ? "circle active" : "circle"}></span>
        ))}
      </div>
    </div>
    <button onClick={handlePrevImg}>previous</button>
    <button onClick={handleNextImg}>next</button>
    </>
  );
};

export default ImageSlider;
