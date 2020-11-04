// import React from 'react';
import React,{Component}from 'react'
import axios from 'axios';

class Self extends Component{
    to=()=>{
        this.props.history.push("/classfly")
    }
    too=()=>{
      this.props.history.push("/login")
  }
      state={
         self:[]
      }
   async componentDidMount(){
    let res= await axios.get("http://localhost:2003/api/self");
     console.log(res,999)
      this.setState({
          self:res.data
      })

    }


//    }
   render(){
    return (
        <div >
          <header> 
                个人中心
              <div className="to" onClick={this.to}></div>
          </header>
            <div className="top">
             <div className="touxiang"></div>
             <div className="self_name"  onClick={this.too}>请登录</div>
             <div className="money">
                 <div className="money_box">积分：0</div>
                 <div className="money_box">余额0.00</div>
                 <div className="money_box">成长指：0</div>
             </div>
            </div>
            <div className="line">
              <div className="qq">全部订单</div>
              <div className="aaa"></div>
            </div>
            <div className="did_list1">
                 <div className="did_list_box1">进行中</div>
                 <div className="did_list_box1">已完成</div>
                 <div className="did_list_box1">待评价</div>
                 <div className="did_list_box1">无效</div>
             </div>
             <div className="lines"></div>
             <div className="self_main">
             {           
           this.state.self.map((item,index)=>{
            return <div className="one1" key={index}>
                <div className="pic1" style={{ background: `url('${item.img}') center center /cover` }}></div>
                <div className="word1">{item.name}</div>
            </div>
            })
            }
            </div>
        </div> 
    )
   }
}
export default Self;