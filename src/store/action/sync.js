// import { SYNC_THUNK } from '../constant'


export const syncAction = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log('请求发送了');
    }, 3000);
  }
}
