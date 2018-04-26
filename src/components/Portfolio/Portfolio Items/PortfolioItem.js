import React, {Component} from 'react'

import './style.css'

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          {this.props.itemTitle}
        </div>
        <div className="portfolio-item__desc">
          {this.props.itemDesc}
        </div>
        <div className="portfolio-item__icon">
          <img src={this.props.itemLogo} />
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" href={this.props.itemCode}>Code</a>
          <a target="_blank" href={this.props.itemGif}>Gif</a>
        </div>
      </div>
    )
  }
}
