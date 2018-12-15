import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Example from './components/Example'

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'


const Hello=(word)=>{
  const phrase = word;
  return (
    <h1>Hello {phrase}</h1>
  )
}

function User(name,id){
  this.name=name;
  this.id=id;
  this.avatar='photo';
}

var John = new User("John",25);


const PrintFullName=(props)=>{
  return (
    <div>
      <h1>My name {props.name}, surname - {props.surname}</h1>
      <a href={`http://${props.link}`}>Link an my profile</a>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Example/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <PrintFullName name="Ivan" surname="Grechkov" link="vk.com/1"/>
        </main>
      </div>
    );
  }
}

export default App;
