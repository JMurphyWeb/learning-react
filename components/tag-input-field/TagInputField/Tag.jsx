import React from 'react'

const style = {
  backgroundColor: '#ff5a5f',
  color: 'white',
  display: 'inline',
  height: '15px',
  padding: '4px',
  listStyleType: 'none'
}
const btnStyle = {
  border: '0px',
  backgroundColor: 'inherit'
}

class Tag extends React.Component {
  render () {
    return (
      <span style={style}>{this.props.content}<button style={btnStyle} onClick={this.props.remove.bind(null, this.props.index)}>X</button></span>
    )
  }
}

export default Tag
