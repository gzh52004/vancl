import React from 'react';
import '../scss/look.scss'
const Look = function(props){
    return(
        <div>
           <header className="look">
               <span className="topback"></span>
               <span className="toptitle">look</span>
           </header>
           <section className="banner">
                <img src="" alt=""/>
           </section>
           <section className="L-content">
               <dl>
                   <dd onClick={()=>{props.history.push("/detail")}}><img src="" alt=""/></dd>
                   <dt><p></p><span></span></dt>
               </dl>
               <dl>
                   <dd><img src="" alt=""/></dd>
                   <dt><p></p><span></span></dt>
               </dl>
           </section>
        </div>
    )
}
export default Look;