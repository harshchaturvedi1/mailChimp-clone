import styles from "./Homepage.module.css";
import { useState,useEffect } from "react";
export default function Homepage() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const [color,setColor]=useState("transparent")
  const scrollevent=(e)=>{
    if(window.scrollY>100)
    {
      return setColor("#ffff");
    }
    else
    {
      return setColor("transparent")
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',scrollevent)
    return ()=>
    window.removeEventListener('scroll',scrollevent)
  },[])
  return  <div className={styles.main_div}>
  {active1?<div className={styles.purplenot}>
  <div style={{marginLeft:"45rem",display:"flex",marginTop:"2rem"}}>
      <div >
        <img src="/notficon.svg"/>
      </div>
      <div ><a>This page is now available in other languages. Choose a different language.</a></div>
      <div style={{marginLeft:"20rem"}} onClick={()=>setActive1(false)}>
        <img src="/cross.svg"  />
      </div>
</div>
  </div>:<></>}
  <div className={styles.navbar} style={{background:`${color}`}}>
    <div style={{marginTop:"3rem",display:"flex"}}>
    <div style={{marginLeft:"3rem"}}>Products</div>
    <div  style={{marginLeft:"3rem"}}>Resources</div>
    <div  style={{marginLeft:"3rem"}}>Inspiration</div>
    <div  style={{marginLeft:"3rem"}}>Pricing</div>
    <div  style={{marginLeft:"20rem",marginTop:"-0.8rem"}}><img src="/logo1.png"/></div>
    <div style={{marginLeft:"-1rem"}}><img src="/logo2.png"/></div>
    <div style={{marginLeft:"30rem"}}><img src="/logo3.png"/></div>
    <div style={{marginLeft:"3rem",marginTop:"-1rem"}}><button style={{height:"4.3rem",width:"10.1rem",border:" 0.8px solid #241C15",background:"transparent"}}>Log In</button></div>
    <div style={{marginLeft:"3rem",marginTop:"-1rem"}}><button style={{height:"4.3rem",width:"12.2rem",background:" #007C89",color:"#ffff",border:"none"}}>Sign Up</button></div>
  </div>
  </div>
  <div className={styles.mainpage}>
      <div className={styles.mainleft}>
        <div className={styles.leftone}>
        Get down to business and grow sales
        </div>
        <div className={styles.lefttwo}>
        Engage your customers and boost your business
        with Mainchimp’s advanced, yet easy-to-use
        marketing platform.
        </div>
        <div className={styles.leftthree}>
          <button className={styles.btnleft}>Sign Up</button>
          <div className={styles.com}>Compare Plans</div>
        </div>
      </div>
      <div className={styles.mainright}>
      <img src="/mainimg.png"/>
       </div>
  </div>
 { active2?<div className={styles.blackbar}>
 <div style={{width:"100%",display:"flex"}}>
<div style={{width:"90rem",marginLeft:"1rem",marginTop:"1.5rem"}}>
Our website  stores cookies on  your device and discloses information in accordance with our Cookie Statement. Choose “Customize Settings” to c to control ocookies. We may collect
certain aggregate and anonymized data from your browser independent of your cookie preferences. Cookie Statement
</div>
<div style={{marginTop:"1.5rem",marginLeft:"20rem"}}>
  <button style={{height:"3.3rem",width:"19rem",background:"transparent",color:"#ffff",border:"1px solid  #ffff"}}>Customise Settings</button>
</div>
<div style={{marginLeft:"1.7rem",marginTop:"2.8rem"}} onClick={()=>setActive2(false)}>
  <img src="/cross.svg"/>
</div>
 </div>
  </div>:<div className={styles.bluediv}>
              <div style={{marginTop:"2rem",margin:"0 auto"}}>Mailchimp is being acquired by Intuit! Our Co-founder and CEO shared the news with our customers. <span style={{color:"blue",textDecoration:"underline"}}>Read here.</span></div>
  </div>}
  <div className={styles.Doit}>Do it all with Mailchimp</div>
  <div className={styles.audience}>Bring your audience data, marketing channels, and insights together so you can reach your goals faster—all from a single platform.</div>
  <div className={styles.secondlast}>
          <div className={styles.slleft}>
                    <div className={styles.sllf} style={{marginLeft:"2.25rem",paddingLeft:"1rem"}}>Get your business online</div>
                    <div className={styles.sllm}>Give your brand a home with a custom domain. Then launch a website to sell products or take appointments, all with built-in marketing tools to help you boost sales and find fans.</div>
                    <div>
                      <button className={styles.btnsl}>Websites and Stores </button>
                    </div>
          </div>
          <div className={styles.slright}>
                <div>
                  <img src="/flone.png"/>
                </div>
          </div>
  </div>
  <div className={styles.secondlast}>
          <div className={styles.slleft}>
                    <div className={styles.sllf} style={{marginLeft:"2rem"}}>Market your business</div>
                    <div className={styles.sllm}>Send the right messages on all the right channels. Build emails, social ads, landing pages, postcards, and more from one place.</div>
                    <div>
                      <button className={styles.btnsl}>Marketing campaigns </button>
                    </div>
          </div>
          <div className={styles.slright}>
                <div>
                  <img src="/frothy.png"/>
                </div>
          </div>
  </div>
  

  </div>
}