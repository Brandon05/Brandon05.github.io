import React, {Component} from 'react'

import './style.css'

export default class About extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="about-page" id="About">
        <div className="content-grid">
          <h1>About</h1>
            <blockquote>
              <i class="fa fa-quote-left fa-lg" style={{paddingRight: '10px'}} aria-hidden="true"></i>
              Hackers solve problems and build things, and
              they believe in freedom and voluntary mutual help.
              <i class="fa fa-quote-right fa-lg" style={{paddingLeft: '10px'}} aria-hidden="true"></i>
            </blockquote>
          <div className="about-wrapper">
            <div className="about-content">
              <p>I am a design-centric software engineer who likes to start with the big picture. 
              I believe UI/UX plays a crucial role when developing software and I enjoy working on products and teams who agree on its importance. 
              I am highly detailed oriented. I enjoy writing clean code, primarily following Robert Martin’s school of thought. 
              I do not like taking shortcuts, especially when it comes to software development. I love to learn. 
              I write code because I like too.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
