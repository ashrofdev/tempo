import React from 'react';
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import './about.css'

const About = () => {
    return (
        <div className="section about">
            <div className="section_content">
                <h2 className="heading">About me</h2>
                <div className="seb_content">
                    <Slide bottom duration={500}>
                        <div className="text">
                            <h3>BADMUS ABDULAZEEZ</h3>
                            <p>
                            I'm a recording artist, 
                            song writer and based in the University of Ibadan.
                            Lorem ispum dorla sit tueldela selp tula buston delaster 
                            rrhkg eryghbfd dgb yf rybdh gtg. 
                            Lorem ispum dorla sit tueldela selp tula buston delaster 
                            rrhkg eryghbfd dgb yf rybdh gtg. 
                            </p>
                            
                        </div>
                    </Slide>
                    <Zoom delay={500}>
                        <figure className="ab_img">
                            <img src={require('../media/v.jpg')}/>
                        </figure>
                    </Zoom>
                </div>
            </div>
            
        </div>
    );
};

export default About;