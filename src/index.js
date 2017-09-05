import React from 'react'
import { render } from 'react-dom'
import { install } from 'offline-plugin/runtime'

// import './base.css'
// import App from './components/App/App'

render(<h1>PWA - React</h1>, document.getElementById('root'))

if (process.env.NODE_ENV === 'production') {
  install()
}
