import React from 'react'
import { render } from 'react-dom'
import { install } from 'offline-plugin/runtime'

// import './assets/css/main.css'

render(<h1>Chempifine</h1>, document.getElementById('root'))

if (process.env.NODE_ENV === 'production') {
  install()
}
