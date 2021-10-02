import './Card2.css'
import {Link} from "react-router-dom";

export default function Card2({ status }) {
    return (
        <div className="card2">

            <h2 className="title">{status ? "Create a website" : "Send your first email"}</h2>

            <p className="text"> {status ? "Build a free website with all the tools needed to market your business built right in. No coding skills needed." : "Choose a pre-designed template or use our drag=and-drop builder to lauch a campaign in  minutes"}</p>
            <button className="buttonCard2"><span className="spanCard2"><Link to="/createEmail">Get Started</Link></span></button>
        </div>
    )
}
