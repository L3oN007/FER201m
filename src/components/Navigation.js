import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <div class="logo">
              <a href="#Home"><img src='./assets/images/logo.png' alt='logo' /></a>
            </div>
            <li><a className='active' href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="user-profile">
          <a href="#Home"><img src='./assets/images/avatar.jpg' alt='avatar' /></a>
        </div>
      </header>
    )
  }
}
