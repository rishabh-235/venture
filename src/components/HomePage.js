import React, { Component } from 'react'
import NavBar from './NavBar';

import Footer from './Footer'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Footer/>
      </div>
    )
  }
}
