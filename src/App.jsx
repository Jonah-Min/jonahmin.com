import { Component } from 'react';
import { Route, Routes } from "react-router";

import HomePage from './containers/HomePage';
import LifeList from './containers/LifeList';
import Emojify from './containers/Emojify';

import './stylesheets/app.css';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="lifelist" element={<LifeList />} />
          <Route path="emojify" element={<Emojify />} />
        </Routes>
      </div>
    );
  }
}

export default App;
