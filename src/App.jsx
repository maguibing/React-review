import './App.css';
// 函数组件
// import Header from './pages/header'
// import Main from './pages/main'
// import Footer from './pages/footer'

import Hook from './pages/hook'

// 类组件
// import ClassComponent from './components/class-component';

const App = () => {
  return(
    <div className='App'>
      <Hook></Hook>
      
      {/* <Header  root ='root'></Header>
      <Main></Main>
      <Footer></Footer>

      <ClassComponent></ClassComponent>   */}
    </div>
  )
}

export default App;
