import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello'
import LikeBtn from './components/LikeBtn'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import './App.css';

const App: React.FC =() => {
  const [ show, setShow ] = useState(true)
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>{setShow(!show)}}>tracker</button>
        <p>x: {position.x}, y: {position.y}</p>
        <Hello message={"3231"}></Hello>
        <LikeBtn></LikeBtn>
        { show && <MouseTracker/> }
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
