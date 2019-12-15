import React from 'react';
import './contact.css'


import { firebaseDB } from '../../Server';


const Contact = () => {
    const onMessageSend = async () => {
        alert('Sending...')
        await firebaseDB.ref('clients').push().set({
            name: document.querySelector('.name').value,
            email: document.querySelector('.mail').value,
            phone: document.querySelector('.num').value,
            message: document.querySelector('.message').value,
        }).then(snapshot=>{
            console.log(snapshot)
            alert('Message sent successfuly')
        }).catch(err=>{
            console.log(err)
            alert('Unable to send message')
        })
        document.querySelector('input').value = ''
        document.querySelector('textarea').value = ''
    }
    return (
        <div className="section contact">
            <div className="section_content">
                <h2 className="heading">contact me</h2>
                <div className="options">
                    <div className="left">
                        <div className="line">
                            <h4>PHONE</h4>
                            <p>📞 +2348047593857</p>
                        </div>
                        <div className="line">
                            <h4>EMAIL</h4>
                            <p>📨 tempozeez2002@gmail.com</p>
                        </div>
                        <div className="line">
                            <h4>ADDRESS</h4>
                            <p>University of Ibadan, Ibadan, Nigeria.</p>
                        </div>
                        

                    </div>
                    <div>
                    
                    </div>
                </div>
            </div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.
                    555460173699!2d3.8957919463229067!3d7.441688724883948!2m3!1f0!2f0!3f0!3m2!1i1
                    024!2i768!4f13.1!3m3!1m2!1s0x1039f2a2c367f6c5%3A0x9a5bc28acaa2556c!2sNnamdi%20
                    Azikiwe%20Hall!5e0!3m2!1sen!2sng!4v1576403169801!5m2!1sen!2sng" 
                        width="100%"
                         height="450"
                          frameBorder="0" 
                    ></iframe>
        </div>
    );
};

export default Contact;