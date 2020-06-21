import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Global } from './style'



ReactDom.render(<div><App /><Global /></div>, document.getElementById('root'))
