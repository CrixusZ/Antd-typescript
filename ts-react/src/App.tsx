import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello'
import LikeBtn from './components/LikeBtn'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import withLoader from './components/withLoader'
import useURLLoader from './hooks/useURLLoader'

import './App.css';
import { data } from 'jquery';

interface IShowResult {
  message: string;
  status: string;
}
interface IThemeProps {
  [key: string]: {color:string; background:string;}
}
const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee',
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}
export const ThemeContext = React.createContext(themes.light)
// const DogShow: React.FC<{data: IShowResult}> = (({ data }) => {
//   return (
//     <>
//       <h2>Dog show: {data.status}</h2>
//       <img src={data.message}></img>
//     </>
//   )
// })
const App: React.FC =() => {
  const [ show, setShow ] = useState(true)
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  const position = useMousePosition()
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult
  console.log(data)
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>{setShow(!show)}}>Refresh tracker</button>
        <p>x: {position.x}, y: {position.y}</p>
        <Hello message={"3231"}></Hello>
        {/* <WrappedDogShow /> */}
        { loading ? <p> 读取中 </p>
        : <img src={dogResult && dogResult.message} />}
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
