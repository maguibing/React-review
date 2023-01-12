import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { filterAction, clearAction } from '../../../store/action/todo'

const Footer = () => {
  const count = useSelector(state => state.todos).filter(v=>!v.done).length
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  return(
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a onClick={()=>dispatch(filterAction('all'))} className={classNames({selected: filter === 'all'})} href="#/">All</a>
        </li>
        <li>
          <a onClick={()=>dispatch(filterAction('active'))} className={classNames({selected: filter === 'active'})} href="#/active">Active</a>
        </li>
        <li>
          <a onClick={()=>dispatch(filterAction('completed'))} className={classNames({selected: filter === 'completed'})} href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={()=> dispatch(clearAction())}>Clear completed</button>
    </footer>
  )
}

export default Footer
