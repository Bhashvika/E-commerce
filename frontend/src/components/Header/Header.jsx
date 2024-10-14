import  { React,useEffect, useState } from 'react';
import Header_icon1 from '../../assets/Header-Image-1.png';
import Header_icon from '../../assets/Header-Image.png';
import Header_icon2 from '../../assets/Header-Image-2.png';
import Header_icon3 from '../../assets/Header-Image-3.png';
import Header_icon4 from '../../assets/Header-Image-4.png';
import Header_icon5 from '../../assets/Header-Image-5.png';
import './Header.css';
const Header = () => {
  const images = [Header_icon, Header_icon1,Header_icon2,Header_icon3,Header_icon4,Header_icon5];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);
  

  return (
    <div className='Header-images'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Header ${index + 1}`}
          className={index === activeIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Header;
