import React from 'react';
import Slide from 'react-reveal/Slide'
import {scroller} from 'react-scroll'
import './portfolio.css'

const Portfolio = ({projects}) => {
    console.log(projects)

   
    return (
        <div className="section portfolio">
        
            <div className="section_content">
                <h2 className="heading">Music List</h2>
                
                <div className="works">
                    <Slide bottom duration={1000} delay={600}>
                        <figure className="work">
                            <p>OJAY</p>
                            <audio controls>
                                <source src={require('../media/ojay.mp3')}/>
                            </audio>
                        </figure>
                    </Slide>
                    <Slide top duration={1000} delay={600}>
                        <figure className="work">
                        <p>WOJU (cover)</p>
                            <audio controls>
                                <source src={require('../media/woju.mpeg')}/>
                            </audio>
                        </figure>
                    </Slide>
                </div>
                {/* <video autoPlay loop mute>
                    <source src={require('../media/video.mp4')}/>
                </video> */}
            </div>
        </div>
    );
};

export default Portfolio;