import React, { Component } from 'react';
import './app.css'

import { firebaseDB, storage } from './Server';
import { scroller } from 'react-scroll'

import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';


class App extends Component {
  state = {
      clients: [],
      projects: [],
      password: 'timi0717'
  }
  async componentDidMount(){
   

  }



  // async upload (file){
  //   console.log(file.target.files[0])
  //   const num  = Math.floor(Math.random() * Math.floor(100))
  //   await storage.ref(`project ${num}`).put(file.target.files[0])

  //   storage.ref(`project ${num}`).getDownloadURL().then(url=>{
  //       firebaseDB.ref('projects').push().set({
  //           url: url
  //       })
  //       console.log(url)
  //   })
    

    

  // }
  
  render() {
    
    return (
      <div className="App">
        <Nav />
        <Header/>
        <About />
        <Portfolio projects={this.state.projects} />
        <Contact />
        <Footer/>
      </div>
    );
  }
}

export default App;
