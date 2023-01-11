import { useEffect, useState } from "react"

export const useMouse = () => {
  const [mouse, setMouse] = useState({x:0, y:0})
  useEffect(()=>{
    const mouseMove = (e) => {
      setMouse({
        x: e.pageX,
        y: e.pageY,
      })
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  },[])
  return mouse
}
