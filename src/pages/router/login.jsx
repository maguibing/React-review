import { useHistory } from "react-router-dom"

const LoginRouter = (props) => {

  // console.log(props);
  const history = useHistory()

  return(
    <div className="login-router">
      <h3 onClick={()=> history.push('/home')}>Login-Router</h3>
    </div>
  )
}

export default LoginRouter
