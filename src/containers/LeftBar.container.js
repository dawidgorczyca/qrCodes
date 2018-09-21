import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './LeftBar.container.css'

class LeftBarContainer extends Component {
  render() { 
    const { translations } = this.props
    return ( 
    <div className="section-leftbar sidebar sidebar--left">
      <span className="section-leftbar__title">
        {translations.header}
      </span>
      <ul>
        <li><Link to="/">{translations.menuItems.home}</Link></li>
      </ul>
    </div>
    )
  }
}
 
export default LeftBarContainer