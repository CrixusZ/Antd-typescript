import React, { useState, useEffect, useRef, useContext } from 'react'
import useMousePosition from '../hooks/useMousePosition'
import {ThemeContext} from '../App'
// useState 改变函数内组件的状态，并且每次组件更新记录的状态值
const LikeBtn: React.FC = () => {
  const [obj, setObj] = useState({like:0, on:true})
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const theme = useContext(ThemeContext)
  console.log(theme)
  const style = {
    background: theme.background,
    color:theme.color,
  }
  const domRef = useRef<HTMLInputElement>(null)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const position = useMousePosition()
  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like])
  useEffect(() => {
    if(didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })
  useEffect(() => {
    if(domRef && domRef.current) {
      domRef.current.focus()
    }
  })
  const handleAlert = () => {
    setTimeout(()=>{
      alert(`点击第${likeRef.current}次`)
      // alert(`点击第${like}次`)
    },3000)
  }
  return (
    <div>
      {/* <p>x: {position.x}, y: {position.y}</p> */}
      <input type="text" ref={domRef} />
      <button style={style} onClick={() => {setLike(like+1);likeRef.current++}}>
        {like} 赞
      </button>
      <button onClick={handleAlert}>
        alert
      </button>
      <button onClick={() => {setOn(!on)}}>
        {on? 'ON':'OFF'} 
      </button>
    </div>
  )
}

export default LikeBtn