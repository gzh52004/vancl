import React from 'react';
import '../scss/home.scss';
import { Carousel, Image } from 'antd';
import 'antd/dist/antd.css';



const Home = function (props) {
    const arr = [{name:"aa"}]
    return (
        <div>
            <header className="home">
                <span className="text">凡客</span>
                <section>
                    <input placeholder="请输入想要搜索的商品" />
                    <button>搜索</button>
                </section>
            </header>
            <Carousel autoplay>
                <div>
                    <Image
                        width={375}
                        height={176}
                        src={require().default}
                    />
                </div>
                <div>
                    <Image
                        width={375}
                        height={176}
                        src={require("../images/02.jpg").default}
                    />
                </div>
                <div>
                    <Image
                        width={375}
                        height={176}
                        src={require().default}
                    />
                </div>
            </Carousel>
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
                        <li onClick={()=>{props.history.push("/look")}}><img src="https://mi2.vanclimg.com/oms/2019_5_22_15_54_9_8508_55x60.jpg" alt="" /><span></span>新品</li>
                        <li><img src="http://i6.m.vancl.com/oms/2018_1_10_15_53_37_6172_59x54.jpg" alt="" /><span></span>特惠</li>
                        <li><img src="https://mi2.vanclimg.com/oms/2018_8_24_11_37_23_9993_59x59.jpg" alt="" /><span></span>衬衫</li>
                        <li><img src="https://mi1.vanclimg.com/oms/2019_10_14_14_30_44_4382_59x59.jpg" alt="" /><span></span>卫衣</li>
                        <li><img src="http://i8.m.vancl.com/oms/2018_8_31_16_38_7_8073_59x59.jpg" alt="" /><span></span>帆布鞋</li>
                    </ul>
                </section>
                <section className="newList">
                    <h3>新品上市</h3>
                    <ul>
                        <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_25_5065_326x206.jpg" alt="" /></li>
                        <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /></li>
                        <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /></li>
                        <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_25_5065_326x206.jpg" alt="" /></li>
                        <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /></li>
                        <li><img src="https://mi1.vanclimg.com/oms/2020_10_16_16_6_22_3854_326x206.jpg" alt="" /></li>
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
                        <img src="https://mi1.vanclimg.com/oms/2020_10_21_10_21_30_5504_640x338.jpg" alt=""/>
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
export default Home;