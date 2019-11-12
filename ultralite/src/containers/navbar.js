import React from 'react';
import buttonNavbar from '../components/buttonNavbar'
import './navbar.css';


export default class Switch extends React.Component {
  render() {
    return (
      <div className="navbar">
      <nav class="navbar navbar-expand-md" id="navigation">
      <ul class="navbar-nav">
      <li class="nav-item-active"> <buttonNavbar 
      p = {this.props.p1}
      handleClick = {this.props.handleClick}
      p_num={this.props.p_num}
      /></li>
      <li class="nav-item"><buttonNavbar 
      p = {this.props.p2} 
      handleClick = {this.props.handleClick}
      p_num={this.props.p_num}
      /></li>
      <li class="nav-item"><buttonNavbar 
      p = {this.props.p3} 
      handleClick = {this.props.handleClick}
      p_num={this.props.p_num}
      /></li>
      </ul>
      </nav>
      </div>
      );
  }
}