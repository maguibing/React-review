import { useHistory, useLocation, useRouteMatch } from "react-router-dom"
import qs from 'query-string'

const LoginRouter = (props) => {

  // console.log(props); 也可以获取路由对象
  const history = useHistory()
  const location = useLocation()
  const match = useRouteMatch()
  console.log(history, location, match);
  console.log(qs.parse(location.search));

  return(
    <div className="login-router">
      <h3 onClick={()=> history.push('/home')}>Login-Router</h3>
    </div>
  )
}

export default LoginRouter
