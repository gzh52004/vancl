import React from 'react';
import '../scss/home.scss';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'


class Home extends React.Component{
   
        state = {
            homeOne: [],
            homeTwo:[],
            banner:[
                {url:"https://mi2.vanclimg.com/wap/2020_10_29_13_9_53_8251_600x300.jpg"},
                {url:"https://mi2.vanclimg.com/wap/2020_10_29_13_12_30_9985_600x300.jpg"},
                {url:"https://mi1.vanclimg.com/wap/2020_10_29_13_54_28_3605_600x300.jpg"},
                {url:"https://mi2.vanclimg.com/wap/2020_10_30_10_47_27_8952_600x300.jpg"},
                {url:"https://mi2.vanclimg.com/wap/2020_10_30_23_33_31_8062_600x300.jpg"}
            ],
        }
        
         
  
    async componentDidMount(){
            let homeOne= await axios.get("http://localhost:2003/api/homeOne");
             console.log(homeOne,999)
              this.setState({
                  homeOne:homeOne.data
              })
        let homeTwo= await axios.get("http://localhost:2003/api/homeTwo");
             console.log(homeTwo,999)
              this.setState({
                  homeTwo:homeTwo.data
              })
}
    render() {
        return (
            <div>
                <header className="home">
                    <span className="text">凡客</span>
                    <section>
                        <input placeholder="请输入想要搜索的商品" />
                        <button>搜索</button>
                    </section>
                </header>
                <section className="banner">
                    <Carousel autoplay>
                        
                            {this.state.banner.map(
                                (item,index)=>{
                                    
                                    return <div key={index}>
                                        <img src={item.url} alt=""/>
                                        </div>
                                }
                            )}
                        
                    </Carousel>
                </section>
                <section className="content">
                    <section className="top">
                        <section className="t-one"><img src="https://mi.vanclimg.com/oms/2020_10_21_10_16_14_1133_976x145.jpg" alt="" /></section>
                        <section className="t-two">
                            <section><img src="https://mi.vanclimg.com/oms/2020_5_26_16_1_34_1721_478x144.jpg" alt="" /></section>
                            <section><img src="https://mi1.vanclimg.com/oms/2020_7_24_8_56_42_6281_478x144.jpg" alt="" /></section>
                        </section>
                    </section>
                    <section className="shop-nav">
                        <ul>
                            {
                              this.state.homeOne.map(
                                  (item,index)=>{
                                    return   <li key={index}><img src={item.img} alt=""/><span>{item.text}</span></li>
                                  }
                              )  
                            }
                        </ul>
                    </section>
                    <section className="newList">
                        <h3>新品上市</h3>
                        <ul>
                        {
                              this.state.homeTwo.map(
                                  (item,index)=>{
                                    return   <li key={index}><img src={item.img} alt=""/></li>
                                  }
                              )  
                            }
                        </ul>
                    </section>
                    <section className="seckill">
                        <h3>限时秒杀</h3>

                        <ul>
                            <li><img src="http://i.vanclimg.com//q80/product/6/3/8/6388712/mid/6388712-1j202006121634198614.jpg" alt="" /><section><span>充值后￥299</span><del>￥590</del></section></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /><section><span>充值后￥299</span><del>￥590</del></section></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /><section><span>充值后￥299</span><del>￥59</del></section></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_25_5065_326x206.jpg" alt="" /><section><span>充值后￥299</span><del>￥59</del></section></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /><section><span>充值后￥299</span><del>￥59</del></section></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /><section><span>充值后￥299</span><del>￥59</del></section></li>
                        </ul>
                    </section>
                    <section className="goods">
                        <h3>新品上市</h3>
                        <section className="pic">
                            <img src="https://mi1.vanclimg.com/oms/2020_10_21_10_21_30_5504_640x338.jpg" alt="" />
                        </section>
                        <ul>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_25_5065_326x206.jpg" alt="" /><p>工装圆领 疯狂抢购呀dftg</p><span className="one">售价：￥585</span><span className="two">充值相当于￥198</span></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /><p>工装圆领 疯狂抢购呀</p><span className="one">售价：￥585</span><span className="two">充值相当于￥198</span></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /><p>工装圆领 疯狂抢购呀</p><span className="one">售价：￥585</span><span className="two">充值相当于￥198</span></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_25_5065_326x206.jpg" alt="" /><p>工装圆领 疯狂抢购呀</p><span className="one">售价：￥585</span><span className="two">充值相当于￥198</span></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /><p>工装圆领 疯狂抢购呀</p><span className="one">售价：￥585</span><span className="two">充值相当于￥198</span></li>
                            <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /><p>工装圆领 疯狂抢购呀</p><span className="one">售价：￥585</span><span className="two">充值相当于￥198</span></li>
                        </ul>
                    </section>

                </section>
                <footer></footer>
            </div>
        )
    }
}
export default Home;