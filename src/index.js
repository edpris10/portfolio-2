import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <ContactMe />
    <Projects />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
