import React, { useState } from 'react'

const LikeBtn: React.FC = () => {
  const [obj, setObj] = useState({like:0, on:true})
  return (
    <>
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