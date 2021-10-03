import { Navbar } from "./Navbar"
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import AudienceCard from './AudienceCard'
import { useState } from 'react'

import './DashboardMain.css'

export const DashboardMain = () => {

    const campaign = JSON.parse(localStorage.getItem("CanpaignSubmit"));
    const [status, setStatus] = useState(campaign);

    return (
        <>
            <Navbar />
            <h1 className="dashboard-header">
                {status ? "You designed your first email. Nice work" : "Ready to get Started?"}
            </h1>
            <div className="dashboard-subheader">Here’s what we recommend you do next</div>
            <Card1 status={status} />
            <Card2 status={status} />

            <div className="dashboard-card3-1-3-2-container">

                <div className="card3-1">{!status ? <Card3 status={status} img={
                    "./dashboard-images/Card3_img1.png"} head={"Create a website"} body={"Build a free website with all the tools needed to market your business built right in. No docing skills needed."} button={"Get Started"}
                /> : <Card3 img={
                    "./dashboard-images/Card3_img4.png"} head={"Start an automation"} body={"Send timely and perosnalized emails without having to hit the send buttton each time."} button={"Get Started"} />}</div>
                <div className="card3-2"><Card3 img={"./dashboard-images/Card3_img2.png"} head={"Add your contacts "} body={"Your contacts make up your audience. Once you add your contacts, you’ll be able to send your first campaign."} button={"Import Contacts"} /></div>
            </div>

            <div className={status ? "hide-cards" : "dashboard-card3-3-3-4-container"}>
                <div status={status} className="card3-3"><Card3 img={
                    "./dashboard-images/Card3_img3.png"} head={"Create a sign up form"} body={"Capture contacts and collect the data you need to grow your Mailchimp audience."} button={"Get Started"} /></div>
                <div className="card3-4"><Card3 img={
                    "./dashboard-images/Card3_img4.png"} head={"Start an automation"} body={"Send timely and perosnalized emails without having to hit the send buttton each time."} button={"Get Started"} /></div>
            </div>
            <div style={{ display: "flex" }}>
                <Card4 value={status} />
                <AudienceCard status={status} />
            </div>
            <div className="feedEnd">
                <div className="feedEndText">You have reached the end of the feed.</div>
                <div className="feedEndImg" ><img src="./dashboard-images/feedEnd.png" alt="feed end" /></div>
            </div>
        </>)
}