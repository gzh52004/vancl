import React from 'react';
import {Route,Redirect,Switch, NavLink} from 'react-router-dom';
import Classfly from './views/classfly';
import Home from './views/home';
// import Mine from './views/mine';
import Shop from './views/shop';
import View from './views/view';
import './scss/common.scss';
import './scss/App.scss';
import './scss/vw.scss';
import './scss/classfly.scss' 
import './scss/sort.scss';
import './scss/list.scss';
import './scss/login.scss';
import Dvd from './views/dvd';
import Self from './views/self';
import Login from './views/login';
import './scss/self.scss';

function App() {
  const nav = [
    {
      text:'首页',
      path:'/home',
      name:'home',
      component:Home,
    },
    {
      text:'分类',
      path:'/classfly',
      name:'classfly',
      component:Classfly,
    },
    {
      text:'频道',
      path:'/view',
      name:'view',
      component:View,
    },
    {
      text:'购物车',
      path:'/shop',
      name:'shop',
      component:Shop,
    },
    {
      text:'我的',
      path:'/mine',
      name:'mine',
      component:Self,
    },
   
]
// const dvd={
  
//   path:'/list',
//   name:'list',
//   component:Dvd,
// }

  return (
    <div>
      <nav>
        <ul>
          {
          nav.map(item=><li key={item.name}><NavLink activeClassName="aactive" to={item.path}>{item.text}</NavLink></li>)
          }
        </ul>
      </nav>
            <Switch>
              {nav.map(item=><Route key={item.name} path={item.path} component={item.component}/>)}
              <Route path="/notfound" render={()=>{return(<div>404</div>)}}/>
              <Route path="/dvd" component={Dvd}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/self" component={Self}></Route>
              <Redirect from="/" to="/home" exact/>
              <Redirect to="/notfound"/>
            </Switch>
        
    </div>
  );
}

export default App;
