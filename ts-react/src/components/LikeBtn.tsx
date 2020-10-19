import React, { useState, useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'
// useState 改变函数内组件的状态，并且每次组件更新记录的状态值
const LikeBtn: React.FC = () => {
  const [obj, setObj] = useState({like:0, on:true})
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const position = useMousePosition()
  useEffect(() => {
    document.title = `点击了${like}次`
  },[like])
  return (
    <div>
      <p>x: {position.x}, y: {position.y}</p>
      <button onClick={() => {setLike(like+1)}}>
        {like} 赞
      </button>
      <button onClick={() => {setOn(!on)}}>
        {on? 'ON':'OFF'} 
      </button>
    </div>
  )
}

export default LikeBtn