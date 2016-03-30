import React from 'react'

class Heading extends React.Component {
  render () {
    return (
    <a href='#' onClick={this.props.changeFocus.bind(null, this.props.i)}>
      <li className={this.props.className}>
        {this.props.name}
      </li>
    </a>
    )
  }
}

export default Heading
