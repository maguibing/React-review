import './App.css';
// 函数组件
// import Header from './pages/header'
// import Main from './pages/main'
// import Footer from './pages/footer'

// import Hook from './pages/hook'
// import UseStore from './pages/use-store';
// import ReduxThunk from './pages/redux-thunk';

import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'


import Login from './pages/router/login'
import Home from './pages/router/home'
import NotFound from './pages/router/404'

// 类组件
// import ClassComponent from './components/class-component';

const App = () => {
  return(
    <Router>
        {/* <ul>
          <li>
            <Link to='/'>page 1</Link>
          </li>
          <li>
            <Link to='/second'>page 2</Link>
          </li>
        </ul>
        <hr /> */}
      <div className='App'>

        <Switch>
          <Route exact path='/'>
            <Redirect to='/login'></Redirect>
          </Route>
          <Route path='/login' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route component={NotFound} />
        </Switch>

        {/* <ReduxThunk></ReduxThunk> */}
        {/* <UseStore></UseStore> */}
        {/* <Hook></Hook> */}
        
        {/* <Header  root ='root'></Header>
        <Main></Main>
        <Footer></Footer>

        <ClassComponent></ClassComponent>   */}
      </div>
    </Router>

  )
}

export default App;
