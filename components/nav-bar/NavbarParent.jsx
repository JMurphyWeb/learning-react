import React from 'react'
import Navbar from './Navbar/index.jsx'

class NavbarParent extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Navbar headings={['home', 'about', 'gallery', 'contact']} />
      </div>
    )
  }
}

export default NavbarParent
