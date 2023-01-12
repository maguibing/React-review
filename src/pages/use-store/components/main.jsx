import { useDispatch, useSelector } from "react-redux"
import classNames from "classnames"
import { delTodo as delTodoFunc, toggleTodo } from "../../../store/action/todo"



const Main = () => {
  const store = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const changeDone = (id) => dispatch(toggleTodo(id))
  const delTodo = (id) => dispatch(delTodoFunc(id))

  return(
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        { store.map(v => (
          <li key={v.id} className={classNames({completed: v.done})}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={v.done} onChange={()=>changeDone(v.id)}/>
              <label>{v.text}</label>
              <button className="destroy" onClick={() => delTodo(v.id)}></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Main
