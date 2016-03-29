import React from 'react'
import Heading from './Heading.jsx'

class Navbar extends React.Component {
  constructor () {
    super()
    this.state = {
      headings: ['home', 'about', 'gallery', 'contact']
    }
  }

  render () {
    return (
      <div className='nav'>
        <ul>
          {this.state.headings.map((heading, i) => {
            return (
              <Heading name={heading} key={i} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Navbar
