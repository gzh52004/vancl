import React from 'react';
import {Route,Redirect,Switch, NavLink} from 'react-router-dom';
import Classfly from './views/classfly';
import Home from './views/home';
import Mine from './views/mine';
import Shop from './views/shop';
import View from './views/view';
import './scss/common.scss';
import './scss/App.scss';
import './scss/vw.scss'


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
      component:Mine,
    },

]

  return (
    <div>
      <nav>
        <ul>
          {
          nav.map(item=><li key={item.name}><NavLink activeClassName="active" to={item.path}>{item.text}</NavLink></li>)
          }
        </ul>
      </nav>
            <Switch>
              {nav.map(item=><Route key={item.name} path={item.path} component={item.component}/>)}
              <Route path="/notfound" render={()=>{return(<div>404</div>)}}/>
              <Redirect from="/" to="/home" exact/>
              <Redirect to="/notfound"/>
            </Switch>
        
    </div>
  );
}

export default App;
