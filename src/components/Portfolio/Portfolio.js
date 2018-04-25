import React, {Component} from 'react';
import PortfolioItem from './Portfolio Items/PortfolioItem'
import swiftLogo from './Swift_logo.svg'

import './style.css'

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const kickswapTitle = "Kickswap"
    const kickswapLogo = swiftLogo
    const kickswapCode = "https://github.com/KickSwap/Bred1s-iOS"
    const kickswapGif = "https://github.com/KickSwap/Bred1s-iOS/blob/master/kickswap_sprint3.gif"
    const kickswapDesc = "Personal project built for sneaker enthusiasts. \
    We attempted to build a platform to facilitate user curated \
    sneaker values and to eventually allow the trading, purchasing and \
    selling of sneakers peer to peer."

    const movietimeTitle = "Movie Time"
    const movietimeCode = "https://github.com/Brandon05/MovieTime"
    const movietimeGif = "https://imgur.com/w9d62ko"
    const movietimeDesc = "Movie Time is a movies app using the The Movie Database API."

    const addressbookTitle = "Address Book"
    const addressbookCode = "https://github.com/Brandon05/Address-Book-"
    const addressbookGif = "https://vimeo.com/265299862"
    const addressbookDesc = "CRUD app built using React.js and Redux on the frontend, Node.js and mySQL on the backend."

    return(
      <div className="portfolio-page" id="Portfolio">
      <div className="content-grid">
        <h1>Portfolio</h1>
        <div className="portfolio-wrapper">
          <PortfolioItem
            itemTitle={kickswapTitle}
            itemDesc={kickswapDesc}
            itemCode={kickswapCode}
            itemGif={kickswapGif}
            itemLogo={swiftLogo}
          />
          <PortfolioItem
            itemTitle={movietimeTitle}
            itemDesc={movietimeDesc}
            itemCode={movietimeCode}
            itemGif={movietimeGif}
            itemLogo={swiftLogo}
          />
          <PortfolioItem
            itemTitle={addressbookTitle}
            itemDesc={addressbookDesc}
            itemCode={addressbookCode}
            itemGif={addressbookGif}
            itemLogo={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"}
          />
        </div>
      </div>
    </div>
    )
  }
}
