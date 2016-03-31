import React from 'react'
import ReactDOM from 'react-dom'
import Dropdown from './Dropdown.jsx'

const container = document.getElementById('container')

ReactDOM.render(
  <div>
    <Dropdown contents={['dropdown', 'item 1', 'item 2', 'item 3']}/>
  </div>
  ,
  container
)
