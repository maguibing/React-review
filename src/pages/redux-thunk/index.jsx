import { useDispatch } from "react-redux"
import { syncAction } from '../../store/action/sync' 

const ReduxThunk = () => {
  const dispatch = useDispatch()

  return(
    <div className="redux-thunk">
      <button onClick={()=> dispatch(syncAction())}>测试执行 redux 异步操作</button>
    </div>
  )
}

export default ReduxThunk
