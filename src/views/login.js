// import React from 'react';
import React,{Component}from 'react'
// import axios from 'axios';

class Login extends Component{

// getvalue(){
//   let UserName=document.getElementById("UserName");
//   let usm=UserName.value;
//   console.log(usm);
// }


  to=()=>{
    this.props.history.push("/self")
}

    //   state={
    //      classfly:[]
    //   }
//    async componentDidMount(){
//     let res= await axios.get("http://localhost:2003/api/sort");
//      console.log(res,999)
//       this.setState({
//           classfly:res.data
//       })
async qeg() {
  console.log('点击登录了')
  let use=document.getElementById("UserName");

  let psd=document.getElementById("Password");

let _username=use.value;
let _password=psd.value;
console.log('输入了',_username);
console.log('输入了',_password);

const result = await fetch(`http://localhost:2003/api/reg?username=${_username}&password=${_password}`).then(res => res.json());
console.log(result);

  if (result.code === 0) {
    console.log('密码错误')
  } else{
      console.log('密码正确')
        }
        this.props.history.push("/self")
}



//    }
   render(){
    return (
    <div className="wrap">
        <div className="topTitle" onClick={this.to}>
            <div  className="topBack"></div>
            <div className="curTitle">登录</div>
        </div>
        <div className="reg-input login1" > 
          <div className="clear" ><input type="text" id="UserName" placeholder="点击输入手机号/Email" name="UserName"/>
          </div> 
          
          <div className="clear" > <input type="password" id="Password" placeholder="请输入密码" name="Password"/>
           </div> 
          
          <div className="user-login" > 
          <input type="hidden" name="url" id="url" value="https://m.vancl.com/User/UserCenterIndex?guid=237be88ad7424fbbbf00c77d89f8bdcd"/>
             <p id="errinfo"></p> 
          </div> 
           <div>
              <input type="hidden" id="hidLoginType" value="1"/>
          </div>
      <div className="topTitle"> 
            <span className="curTitle" className="bsc" onClick={this.qeg} >登录</span>
          </div>
          <div className="boxx">
          <span className="sp1" >免费注册&emsp;》</span>
          <span className="sp2">忘记密码&emsp;》</span>
      </div>
    </div>
    </div>
    )
   }
}

export default Login;