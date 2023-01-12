import { FILTER_TODO } from '../constant'
const initial = 'all'
export const filter = (state = initial, action) => {
  switch(action.type){
    case FILTER_TODO:
      return action.payload.filter
    default:
      return state
  }
}
