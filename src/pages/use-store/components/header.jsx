import { createRef } from "react"
import { useDispatch } from "react-redux"
import { addTodo as addTodoFn } from '../../../store/action/todo'

const Header = () => {
  const textRef = createRef(null)
  const dispatch = useDispatch()
  const addTodo = (e) => {
    const text = textRef.current.value
    if(e.keyCode!==13 || !text) return 
    dispatch(addTodoFn(text))
    textRef.current.value = ''
  } 

  return(
    <header className="header">
      <h1>todos</h1>
      <input
        onKeyUp={addTodo}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        ref={textRef}
      />
    </header>
  )
}

export default Header
