import React from 'react';
import Slider from 'react-slick'
import './head.css'

const Header = () => {
    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 700
    }
    return (
        <div className="slider">
            <h1>TEMPO</h1>
            <Slider {...settings}>
                <div className="slide">
                   <img src={require('../media/badmus2.jpeg')}/>
                </div>
                <div className="slide">
                   <img src={require('../media/ani.jpg')}/>
                </div>
                <div className="slide">
                   <img src={require('../media/badmus1.jpg')}/>
                </div>
            </Slider>
        </div>
    );
};

export default Header;