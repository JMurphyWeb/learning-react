import React from 'react'

class Heading extends React.Component {
  render () {
    return (
      <li>
        {this.props.name}
      </li>
    )
  }
}

export default Heading
