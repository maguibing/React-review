import { useContext } from "react"
import Context from "./context"


const Child = () => {
  const context = useContext(Context)

  return(
    <div className="child">
      {JSON.stringify(context)}
    </div>
  )
}

export default Child
