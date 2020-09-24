import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({x:0,y:0})
  useEffect(()=>{
    // react会在执行当前effect之前清除上一次的effect
    console.log('add effect', position.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPosition({x:e.clientX, y:e.clientY})
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove effect', position.x)
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  // console.log('before render',position.x)
  return (
    <p>x: {position.x}, y:{position.y} </p>
  )
}
export default MouseTracker