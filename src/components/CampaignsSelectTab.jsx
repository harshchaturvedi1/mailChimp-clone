import styles from "./CampaignsSelectTab.module.css";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function CampaignsSelectTab(){

    const Main = styled.div`
        background:transparent;
        position: fixed;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 100;
        overflow: hidden auto;
        transform: translateY(0%);
        opacity: 1;
        visibility: visible;
        top: 0;
        left: 31.8rem;
        width: 100vw;;
        padding: 3rem 15.1rem;
    `

    const PopUp = styled.div`
        height:62.4rem;
        width:82rem;
        background-color:#F6F6F4;
    `

    const Button = styled.button`
    >a{
        text-decoration:none;
        color: inherit;
    }
    
    `


    return (
        <Main>
            <PopUp >
                <p className={styles.h1}>Try our new email builder</p>
                <img className={styles.closeX} src="/images/closeSign.svg" alt=""/>
                <p>We’re introducing a new way for you to easily design beautiful and compelling emails.
                    Our work is ongoing, so we’ve made it easy to give this new builder a try and switch
                    back to the classic builder</p>
                <div className={styles.template}>
                    <div>
                        <h2>Classic Builder</h2>
                        <img src="/images/template.svg" alt="" />
                        <ul>
                            <li>Our traditional builder you may know and love</li>
                            <li>Create custom templates and showcase your e-commerce products</li>
                            <li>Place blocks(images and text) side by side</li>
                        </ul>
                        <Button><Link to="/dashboard/template">Select</Link></Button>
                    </div>
                    <div>
                        <h2>New Builder</h2>
                        <img src="/images/template.svg" alt="" />
                        <ul>
                            <li>Our traditional builder you may know and love</li>
                            <li>Create custom templates and showcase your e-commerce products</li>
                            <li>Place blocks(images and text) side by side</li>
                        </ul>
                        <Button><Link to="/dashboard/template">Select</Link></Button>
                    </div>
                </div>
            </PopUp>
        </Main>
    )
}