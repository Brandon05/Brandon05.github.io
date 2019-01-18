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
          <div className="about-wrapper">
            <div className="about-content">
              <p>Hackers solve problems and build things, and
                they believe in freedom and voluntary mutual help.</p>
              <p>I'll eventually write some witty banter that expresses who I am.
                Or I'll just fill it with cool quotes I like. Until then, enjoy the empty.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
