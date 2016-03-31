import React from 'react'

class Dropdown extends React.Component {
  constructor () {
    super()
    this.state = {
      dropdownVisable: false
    }
    this.showDropdown = this.showDropdown.bind(this)
    this.hideDropdown = this.hideDropdown.bind(this)
    this.renderDropdownMenu = this.renderDropdownMenu.bind(this)
  }
  showDropdown () {
    this.setState({dropdownVisable: true})
    window.document.addEventListener('click', this.hideDropdown)
  }
  hideDropdown () {
    this.setState({dropdownVisable: false})
    window.document.removeEventListener('click', this.hideDropdown)
  }
  renderDropdownMenu () {
    return (
    <ul className={'dropdown'}>
      {this.props.contents.slice(1).map((name, i) => {
        return <li className={'dropdownli'} key={i}>
                {name}
              </li>
      })}
    </ul>
    )
  }

  render () {
    return (
    <div>
      <div className={'dropdown-cover'} onClick={this.showDropdown}>
        {this.props.contents[0]} <span className='arrowDown'>&#x25BC;</span>
      </div>
      <div className={(this.state.dropdownVisable ? ' show' : ' hide')}>
        {this.renderDropdownMenu()}
      </div>
    </div>
    )
  }
}

export default Dropdown
