import React, { Component } from 'react';
import Header from './Header';
import { cn } from "@bem-react/classname";

import './App.css';
import Footer from './Footer';
import Feed from './Feed';

const cnMainPanel = cn('MainPanel');

class App extends Component {
  render() {
    return (
      <div className={cnMainPanel()}>
        <Header />
        <Feed />
        <Footer />
      </div>
    );
  }
}

export default App;
