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
        <Navbar />
        <p>Currently on something page</p>
      </div>
    )
  }
}

export default NavbarParent
