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
              <p>This is the about page.</p>
              <p>I will write some witty banter that expresses who I am</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
