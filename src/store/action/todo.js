import { DEL_TODO, ADD_TODO, TOGGLE_TODO } from '../constant'

/**
 * 
 * @param {*} id 
 * @returns 
 */
export const delTodo = (id) => {
  console.log(id);
  return {
    type: DEL_TODO,
    payload: {
      id
    }
  }
}

/**
 * 添加的文本内容
 * @param {*} text 
 * @returns 
 */
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  }
})

/**
 * 修改状态
 * @param {*} done 
 * @returns 
 */
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

