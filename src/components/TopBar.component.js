import React from 'react'

import './TopBar.component.css'

const TopBarComponent = (props) => {
  const { translations } = props
  return (
  <div className="section-topbar">
    <span className="topbar__logo">{translations.logo}</span>
  </div>
  )
}
 
export default TopBarComponent