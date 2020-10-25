import React, { useState, useEffect } from 'react'
// 自定义hooks必须要用use开头
const useMousePosition = () => {
  const [position, setPosition] = useState({x:0,y:0})
  useEffect(()=>{
    console.log('add effect', position.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPosition({x:e.clientX, y:e.clientY})
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove effect', position.x)
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])
  // console.log('before render',position.x)
  return position
}

export default useMousePosition