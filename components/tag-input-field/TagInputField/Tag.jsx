import React from 'react'

const style = {
  color: 'white',
    height: '25px',
  padding: '4px',

}
const btnStyle = {
  border: '0px',
  backgroundColor: 'inherit'
}
const liStyle = {
  backgroundColor: '#ff5a5f',
  border: '1px solid #ffa6a8',
  borderRadius: '4px',
  height: '25px',
  display: 'inline',
  float: 'left',
  padding: '4px',
  margin: '-10px 2px 2px 2px'
}

class Tag extends React.Component {
  render () {
    return (
      <li style={liStyle}>
        <span contentEditable={true} onKeyDown={this.props.enterKeyFunc} style={style}>
          {this.props.content}
        </span>
        <button style={btnStyle} onClick={this.props.remove.bind(null, this.props.index)}>
          X
        </button>
      </li>
    )
  }
}

export default Tag
