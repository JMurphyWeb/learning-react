import React from 'react'
import ReactDOM from 'react-dom'
import Tag from './Tag.jsx'

class TagInputField extends React.Component {
  constructor () {
    super()
    this.state = {
      tags: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.removeTag = this.removeTag.bind(this)
    this.edit = this.edit.bind(this)
    this.enterKeyFunc = this.enterKeyFunc.bind(this)
  }
  enterKeyFunc (e) {
    if (e.keyCode === 13) {
      ReactDOM.findDOMNode(this.refs.myInput).focus()
    }
  }
  removeTag (index) {
    console.log(index)
    let tags = this.state.tags.slice(0, index).concat(this.state.tags.slice(index + 1))
    this.state.tags = tags
    this.setState(this.state)
  }
  handleChange (e) {
    if (e.keyCode === 188 || e.keyCode === 13) {
      if (e.target.value !== '') {
        this.state.tags.push(e.target.value)
      }
      this.state.value = ''
      this.setState(this.state)
    } else if (e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode === 32) {
      this.state.value += String.fromCharCode(e.keyCode).toLowerCase()
      this.setState(this.state)
    } else if (e.keyCode === 8) {
      const cursorPos = e.target.selectionStart
      if (cursorPos === 0) {
        this.state.tags.pop()
      } else {
        this.state.value = this.state.value.slice(0, cursorPos - 1) + this.state.value.slice(cursorPos)
      }
      this.setState(this.state)
    }
  }
  edit (index) {
    console.log('editing')
  }

  render () {
    return (
      <div style={divStyle}>
        <ul style={ulStyle}>
        {this.state.tags.map((tag, index) => {
          return (
            <Tag enterKeyFunc={this.enterKeyFunc} edit={this.edit} remove={this.removeTag} index={index} content={tag} key={index} />
          )
        })}
        </ul>
        <input ref='myInput' style={inputStyle} placeholder={'write here'} value={this.state.value} type='text' onKeyDown={this.handleChange}></input>
      </div>
    )
  }
}

const divStyle = {
  minWidth: '100px',
  maxWidth: '400px',
  fontSize: '18px',
  border: 'solid 1px black',
  borderRadius: '5px',
  padding: '4px',
  color: 'grey',
  fontFamily: 'arial',
  fontWeight: '1px'
}
const ulStyle = {
  display: 'inline-block',
  listStyleType: 'none',
  float: 'left',
  paddingLeft: '0px'
}
const inputStyle = {
  border: 'none',
  fontSize: '18px',
  padding: '4px',
  height: '40px',
  minWidth: '50px',
  outline: 'none'
}

export default TagInputField
