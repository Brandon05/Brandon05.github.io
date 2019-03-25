import React, {Component} from 'react';
import PortfolioItem from './Portfolio Items/PortfolioItem'
import swiftLogo from './Swift_logo.svg'

import './style.css'

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const upstreamTitle = "Upstream"
    const upstreamCode = ""
    const upstreamVideo = ""
    const upstreamDesc = "Minimal iOS app that allows users to browse, search and \
    save posts from uplabs.com."

    const physicianTitle = "Physician's Choice"
    const physicianCode = ""
    const physicianGif = "https://vimeo.com/326323908"
    const physicianDesc = "A proprietary iOS app to help users track their food choices, built for www.pcweightloss.com "

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
            itemTitle={upstreamTitle}
            itemDesc={upstreamDesc}
            itemCode={upstreamCode}
            itemGif={upstreamVideo}
            itemLogo={swiftLogo}
          />
          <PortfolioItem
            itemTitle={physicianTitle}
            itemDesc={physicianDesc}
            itemCode={physicianCode}
            itemGif={physicianGif}
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
