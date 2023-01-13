import { useHistory } from "react-router-dom"
import qs from 'query-string'

const HomeRouter = () => {
  const history = useHistory()
  const list = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Jack"},
    {id: 3, name: "Rose"},
  ]


  return(
    <div className="home-router" style={{textAlign: 'center'}}>
      {list.map(v=> {
        // params
        // return <li onClick={() => history.push(`/login/${v.id}`)} key={v.id} >{v.name}</li>
        // // query
        // return <li onClick={history.push({pathname:"/login", query: { id: v.id}})} key={v.id} >{v.name}</li>
        // // state
        // return <li onClick={history.push({pathname:"/login", state: { id: v.id}})} key={v.id} >{v.name}</li>
        // // search
        return <li onClick={()=>history.push({pathname:"/login", search: qs.stringify({id: v.id})})} key={v.id} >{v.name}</li>
      })}
    </div>
  )
}

export default HomeRouter
