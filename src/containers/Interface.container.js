import React, { Component } from 'react'
import LeftBarContainer from './LeftBar.container'
import TopBarComponent from '../components/TopBar.component'

import './Interface.container.css'

class InterfaceContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }

  render() {
    const { translations } = this.props
    const { Sidebar, Topbar } = translations
    return (
    <div className="section-interface">
      <TopBarComponent translations={Topbar}/>
      <LeftBarContainer translations={Sidebar}/>
      {this.props.children}
    </div>
    )
  }
}
 
export default InterfaceContainer