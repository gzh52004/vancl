// import React from 'react';
import React,{Component}from 'react'
// import axios from 'axios';

class Login extends Component{
  
    //   state={
    //      classfly:[]
    //   }
//    async componentDidMount(){
//     let res= await axios.get("http://localhost:2003/api/sort");
//      console.log(res,999)
//       this.setState({
//           classfly:res.data
//       })




//    }
   render(){
    return (
        <div >
          <header> 
                登录
              <div className="to"></div>
          </header>
          <input type="text" id="UserName" placeholder="点击输入手机号/Email" name="UserName" value=""/>
          
          
        </div> 
    )
   }
}
export default Login;