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
            <Redirect to='/home'></Redirect>
          </Route>
          <Route path='/home' component={Home} />
          {/* <Route path='/login/:id' component={Login} /> */}
          <Route path='/login' component={Login} />
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
