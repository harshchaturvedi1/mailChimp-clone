import styled from "styled-components"
import {Link} from "react-router-dom"

export default function EmailSent(){

    const Main = styled.div`
        position: fixed;
        height: 100vh;
        z-index: 100;
        overflow: hidden auto;
        transform: translateY(0%);
        opacity: 1;
        visibility: visible;
        top: 0;
        left: 31.8rem;
        width: 100vw;;
    `

    const PopUp = styled.div`
        height:100vh;
        width:100%;
        padding: 7.4rem 0rem 0rem 8.4rem;
        text-align: left;
    `
    const P1 = styled.p`
        margin-top: 0.8rem;
        font-size:4.4rem;
        line-height:5.5rem;
        font-weight: 400;
        font-family: 'Source Serif Pro Regular';
    `;

    const P2 = styled.p`
        font-size:1.6rem;
        line-height:2.2rem;
        font-weight: 400;
        width:60.4rem;
    `;

    const Button = styled.button`
        padding: 1.1rem 2.9rem;
        margin-top:1.6rem;
        border: 0rem;
        background-color: #007C89;
        color: white;
        font-weight: 500;
        letter-spacing: -3%;
    `
    localStorage.setItem("CanpaignSubmit","true");

    return (
        <Main>
            <PopUp >
                <P1>...aand it’s out there</P1>
                <P2>Lorem Ipsum is on its way to 3 subscribers from the audience Lorem Ipsum. Take a breather you’ve earned it.</P2>
                <P2 style={{marginTop:"2.8rem"}}>View or share your campaign link:</P2>
                <Link to="/dashboard" style={{fontSize:"1.4rem",color:"#007C89", cursor: "pointer"}}>https://malichi.mp/639f69ef1b3/proin-a-lectus-ac-turpis-facilies</Link>
                <br/>
                <Button><Link to="/dashboard" style={{textDecoration:"none", color:"inherit"}}>Track Your Stats</Link></Button>
                <img style={{position: 'absolute',top:"18.5rem", left:"55rem"}} src="/images/successImg.svg" alt=""/>
            </PopUp>
        </Main>
    )
}