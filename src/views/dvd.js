
import axios from 'axios';
import React,{Component}from 'react'
class Dvd extends Component{
  
      state={
         lists:[]
      }
   async componentDidMount(){
    let res= await axios.get("http://localhost:2003/api/lists");
     console.log(res,999)
      this.setState({
          lists:res.data
      })




   }
   render(){
    return(
        <div className="box">
            <header> 
                免烫衬衫
              <div className="to"></div>
            </header>
             <div className="did_list">
                 <div className="did_list_box">新品</div>
                 <div className="did_list_box">销量</div>
                 <div className="did_list_box">评价</div>
                 <div className="did_list_box">价格</div>
             </div>
             <div className="did_main">
               {
            this.state.lists.map((item,index)=>{
               return  <div className="did_main_box" key={index}>
                  <div className="did_main_pic" style={{ background: `url('${item.img}') center center /cover` }}></div>
                  <div className="did_main_name">{item.name}</div>
                  <div className="did_main_price">{item.price}</div>
                 </div>
                 })
               }
             </div>
        </div>
    )
}
}
export default Dvd;