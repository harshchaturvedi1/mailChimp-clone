import { Navbar } from "./Navbar"
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

import './DashboardMain.css'

export const DashboardMain = () => {
    return (
        <>
            <Navbar />
            <Card1 />
            <Card2 />
            <div className="card3-1"><Card3 img={
                "./dashboard-images/Card3_img1.png"} head={"Create a website"} body={"Build a free website with all the tools needed to market your business built right in. No docing skills needed."} button={"Get Started"}
            /></div>
            <div className="card3-2"><Card3 img={"./dashboard-images/Card3_img2.png"} head={"Add your contacts "} body={"Your contacts make up your audience. Once you add your contacts, you’ll be able to send your first campaign."} button={"Import Contacts"} /></div>
            <div className="card3-3"><Card3 img={
                "./dashboard-images/Card3_img3.png"} head={"Create a sign up form"} body={"Capture contacts and collect the data you need to grow your Mailchimp audience."} button={"Get Started"} /></div>
            <div className="card3-4"><Card3 img={
                "./dashboard-images/Card3_img4.png"} head={"Start an automation"} body={"Send timely and perosnalized emails without having to hit the send buttton each time."} button={"Get Started"} /></div>
        </>)
}