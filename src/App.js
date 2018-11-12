import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import { cn } from "@bem-react/classname";

import './App.css';
import Footer from './Footer';
import Content from './Content';

const cnMainPanel = cn('MainPanel');

class App extends Component {
  render() {
    return (
      <div className={cnMainPanel()}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
