import { useState } from 'react';
import Logo from './components/Logo';
import ChatBox from './components/ChatBox';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="logo-container">
        <Logo />
        <h1 className="app-title">Think Ahead</h1>
        <p className="app-subtitle">Your AI Study Assistant - Learn by Thinking</p>
      </div>
      <ChatBox />
    </div>
  );
}

export default App;
