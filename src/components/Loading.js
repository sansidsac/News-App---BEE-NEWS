import React, { Component } from 'react'
import load from './load.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={load} alt="loading" />
      </div>
    )
  }
}
