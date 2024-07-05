import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Display from './components/body/Display';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Display />
    </div>
  );
};