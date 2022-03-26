import { useState } from 'react';
import './App.css';
import Routing from './shared/Routing';
import Navbar from './shared/Navbar';
import Home from './components/Home';
import Theme from './shared/Theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
 
  return (
   
      <div className="flex">
        <Navbar />
        <Routing />
        <Theme />
      </div>
   
  );
}

export default App;
