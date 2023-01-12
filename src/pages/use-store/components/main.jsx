import { useDispatch, useSelector } from "react-redux"
import classNames from "classnames"
import { delTodo as delTodoFunc, toggleTodo, checkAllAction } from "../../../store/action/todo"



const Main = () => {
  const filter = useSelector(state => state.filter)
  const store = useSelector(state => {
    if(filter === 'all'){
      return state.todos
    }else if(filter === 'active') {
      return state.todos.filter(v=>!v.done)
    }else if(filter === 'completed'){
      return state.todos.filter(v=>v.done)
    }
  })
  

  const checkAll = store.every(v=>v.done)
  const dispatch = useDispatch()
  const changeDone = (id) => dispatch(toggleTodo(id))
  const delTodo = (id) => dispatch(delTodoFunc(id))

  return(
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={checkAll} onChange={(e)=>{dispatch(checkAllAction(e.target.checked))}}/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        { store.map(v => (
          <li key={v.id} className={classNames({completed: v.done})}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={v.done} onChange={()=>changeDone(v.id)}/>
              <label>{v.text}</label>
              <button className="destroy" onClick={() => delTodo(v.id)}></button>
            </div>
            {/* <input className="edit" value="Create a TodoMVC template" /> */}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Main
