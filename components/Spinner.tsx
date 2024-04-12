import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

const LoadingComponent = () => {
  const images = [require('../assets/1.png'), require('../assets/2.png'), require('../assets/3.png')];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return <Image source={images[currentImageIndex]}
  style={{height: 100, width: 100}} />;
};

export default LoadingComponent;