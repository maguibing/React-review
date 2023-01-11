import { useEffect, useRef, useState } from "react"
import { useMouse } from '../../hook/hook'
import Context from './context'
import Child from "./child"
const Hook = () => {
  const inputRef = useRef(null)
  // const 
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({name: "maguibing", age: 18})
  const mouse = useMouse()
  const changeUser = () => {
    setUser({
      ...user,
      age: 20
    })
    console.log(inputRef.current.value);
  }

  /**
   * useEffect 的使用方法：
   * 1\ useEffect(()=>{})
   * 2\ useEffect(()=>{},[])
   * 3\ useEffect(()=>{
   *      return () => {
   *      清除副作用
   *    }
   *  },[xxx])
   */
  useEffect(()=>{
    document.title = count
  },[count])
  // const showTitle = () => {
  // }

  return(
    <Context.Provider value={count}>
    <div className="hook">
      {count} <button onClick={()=>setCount(count+1)}>+</button> <br />
      姓名：{user.name}
      年龄：{user.age} <button onClick={changeUser}>修改个人信息</button>
      { JSON.stringify(mouse)}
      {/* <button onClick={showTitle}>显示到标题</button> */}

      <input type="number"  ref={inputRef}/>
    </div>  
      <Child></Child>
    </Context.Provider>

  )
}

export default Hook
