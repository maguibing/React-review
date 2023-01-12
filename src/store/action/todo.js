import { DEL_TODO, ADD_TODO, TOGGLE_TODO, CHECK_ALL, FILTER_TODO, CLEAR_TODO } from '../constant'

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

/**
 * 全选或者反选
 * @param {*} done 
 * @returns 
 */
export const checkAllAction = (done) => ({
  type: CHECK_ALL,
  payload: {
    done
  }
})

/**
 * 筛选
 * @param {*} filter 
 * @returns 
 */
export const filterAction = (filter) => ({
  type: FILTER_TODO,
  payload: {
    filter
  }
})

export const clearAction = () => ({
  type: CLEAR_TODO,
  payload: {
    
  }
})

