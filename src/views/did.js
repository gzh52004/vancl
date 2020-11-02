// import React from 'react';
import React,{Component}from 'react'
import axios from 'axios';

class Did extends Component{
  
      state={
         classfly:[]
      }
   async componentDidMount(){
    let res= await axios.get("http://localhost:2003/api/goods",[]);
     console.log(res,999)
      this.setState({
          classfly:res.data
      })


      



   }
   render(){
    return ( 
        <div className="section">
            {
           this.state.classfly.map((item,index)=>{
            return <div className="one" key={index}>
                <div className="pic" style={{ background: `url('${item.img}') center center /cover` }}></div>
                <div className="word">{item.name}</div>
            </div>
            })
            }
        </div> 
    )
   }
}
export default Did;