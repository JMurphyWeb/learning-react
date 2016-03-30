import React from 'react'
import Heading from './Heading.jsx'

class Navbar extends React.Component {
  constructor () {
    super()
    this.state = {
      focus: 0
    }
    this.changeFocus = this.changeFocus.bind(this)
  }

  changeFocus (i) {
    this.setState({focus: i})
    console.log(this.state)
  }

  render () {
    return (
      <div className='nav'>
        <ul>
          {this.props.headings.map((heading, i) => {
            const className = (this.state.focus === i) ? 'focus' : ''
            return (
              <Heading className={className} name={heading} key={i} i={i} changeFocus={this.changeFocus} focus={this.focus} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Navbar
