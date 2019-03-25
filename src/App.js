import React, { Component } from 'react';
import logo from './HND.svg';
import Nav from  './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main>
          <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={logo} height='auto' width='200px'/>
          <div class="intro">Hi, I'm Brandon!</div>
      		<div class="tagline">
            Software Engineer
            <span style={{color: 'red'}}> | </span>
             Philosopher
            <span style={{color: 'red'}}> | </span>
             Lifelong Learner
          </div>
          <div class='icons-social'>
            <a target="_blank" href="https://github.com/Brandon05"><i class="fab fa-github"></i></a>
            <a target="_blank" href="https://twitter.com/BrrandonSanchez"><i class="fab fa-twitter"></i></a>
          </div>
        </main>
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
