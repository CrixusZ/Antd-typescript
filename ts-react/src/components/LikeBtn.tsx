import React, { useState, useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'
// useState 改变函数内组件的状态，并且每次组件更新记录的状态值
const LikeBtn: React.FC = () => {
  const [obj, setObj] = useState({like:0, on:true})
  const position = useMousePosition()
  useEffect(() => {
    document.title = `点击了${obj.like}次`
  },[obj])
  return (
    <>
      <p>x: {position.x}, y: {position.y}</p>
      <button onClick={() => {setObj({
        like:obj.like+1,
        on:true
      })}}>
        {obj.like} 赞
      </button>
      <button onClick={() => {setObj({
        like:obj.like,
        on:!obj.on
      })}}>
        {obj.on? 'ON':'OFF'} 
      </button>
    </>
  )
}

export default LikeBtn