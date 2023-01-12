import { useHistory } from "react-router-dom"

const HomeRouter = () => {
  const history = useHistory()

  return(
    <div className="home-router">
      <h3 onClick={()=> history.push('/login')}>Home-Router</h3>
    </div>
  )
}

export default HomeRouter
