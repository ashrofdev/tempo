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
                            <h3>Badmus Abdulazeez Babatunde A.K.A tempo </h3>
                            <p>
                            He is currently
                             the CBN  LT deputy governor in the university of Ibadan.
                              A great lover of  music 
                             and songwriting. With great and amazing vocals, 
                              he has rapidly become a sensational artists. 
                              His singles include  never let you go and ojay .. 
                              He also does amazing covers of songs
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