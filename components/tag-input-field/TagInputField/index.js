import React from 'react'
import Tag from './Tag.jsx'

const style = {
  minWidth: '100px',
  maxWidth: '200px',
  fontSize: '18px',
  border: 'solid 1px black',
  padding: '4px',
  color: 'grey',
  fontFamily: 'arial',
  fontWeight: '1px'
}
const ulStyle = {
  display: 'inline-block',
  listStyleType: 'none'
}

class TagInputField extends React.Component {
  constructor () {
    super()
    this.state = {
      tags: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.removeTag = this.removeTag.bind(this)
  }

  removeTag (index) {
    console.log(index)
    let tags = this.state.tags.slice(0, index).concat(this.state.tags.slice(index + 1))
    this.state.tags = tags
    this.setState(this.state)
  }
  handleChange (e) {
    if (e.keyCode === 188 || e.keyCode === 13) {
      if(e.target.value !== '') {
        this.state.tags.push(e.target.value)
      }
      this.state.value = ''
      this.setState(this.state)
    } else if (e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode === 32) {
      this.state.value += String.fromCharCode(e.keyCode).toLowerCase()
      this.setState(this.state)
    } else if (e.keyCode === 8) {
      this.state.value = this.state.value.slice(0, -1)
      this.setState(this.state)
    }
  }

  render () {
    return (
      <div>
        <input value={this.state.value} style={style} type='text' onKeyDown={this.handleChange}></input>
        <ul style={ulStyle}>
        {this.state.tags.map((tag, index) => {
          return (
            <li>
              <Tag remove={this.removeTag} index={index} content={tag} key={index} />
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default TagInputField
