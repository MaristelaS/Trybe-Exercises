import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import React from 'react';
import Content from './Content.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
