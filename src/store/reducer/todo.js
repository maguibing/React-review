import { ADD_TODO, TOGGLE_TODO, DEL_TODO, CHECK_ALL, CLEAR_TODO } from '../constant'

const initial = [
  { id: 1, text: '吃饭', done: true },
  { id: 2, text: '学习', done: false },
  { id: 3, text: '睡觉', done: true }
]

export const todos = (state = initial, action) => {
  switch(action.type){
    case ADD_TODO: 
      return [...state, {id: Date.now(),text: action.payload.text,done: false}]
    case TOGGLE_TODO:
      return state.map(v=>{
        if(v.id===action.payload.id) return {...v, done: !v.done}
        return v
      })
    case DEL_TODO:
      return state.filter(v=> v.id !== action.payload.id)
    case CHECK_ALL:
      return state.map(v => ({
        ...v,
        done: action.payload.done
      }))
    case CLEAR_TODO:
      return state.filter(v=>!v.done)
    default: 
      return state
  }
}
