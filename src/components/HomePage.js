import React, { Component } from 'react'
import NavBar from './NavBar';
import { Outlet} from "react-router-dom";
import Footer from './Footer'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Outlet />
        <Footer/>
      </div>
    )
  }
}
