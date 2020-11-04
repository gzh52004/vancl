
import{Route,NavLink as Link,Redirect}from "react-router-dom"
// import Home from "./home";
import Div from "./div";
import Did from "./did";
import React,{Component}from 'react'
class Classfly extends Component{
    to=()=>{
        this.props.history.push("/home")
    }
    render(){
    return(
        <div className="box">
            <header> 
                分类
              <div className="to" onClick={this.to}></div>
            </header>
            <div className="main">
            <ul className="ull">
                <li className="lii"><Link to="/classfly/div">推荐</Link></li>
                <li className="lii"><Link to="/classfly/did">男装</Link></li>
                <li className="lii"><Link to="/classfly/did">男鞋</Link></li>
                <li className="lii"><Link to="/classfly/div">女鞋</Link></li>
                <li className="lii"><Link to="/classfly/div">袜品</Link></li>
                <li className="lii"><Link to="/classfly/div">家居</Link></li>
                <li className="lii"><Link to="/classfly/div">女装</Link></li>
                <li className="lii"><Link to="/classfly/div">童装</Link></li>
                <li className="lii"><Link to="/classfly/div">内衣</Link></li>
                <li className="lii"><Link to="/classfly/div">反季直降</Link></li>
                <li className="liii"></li>
                
            </ul >
            {/* <Router path="/div" Component={Div}></Router> */}
            <Route path="/classfly/div" component={Div}></Route>
            <Route path="/classfly/did" component={Did}></Route>
            <Redirect path="/classfly" to="/classfly/did"/>
            </div>
        </div>
    )
}
}




export default Classfly;