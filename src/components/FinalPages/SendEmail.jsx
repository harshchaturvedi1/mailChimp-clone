import styled from "styled-components"
import {Link} from "react-router-dom"

export default function SendEmail({setStatus}){

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
        padding: 22.1rem 36rem;
    `

    const PopUp = styled.div`
        height:27.7rem;
        width:40.1rem;
        background-color:#F6F6F4;
    `
    const Nav = styled.div`
        height:6.5rem;
        width:100%;
        background-color:#e2e2e1;
        color: #241C15;
        font-size: 1.6rem;
        font-weight:500;
        align-items: center;
        display: flex;
        justify-content: center;
    `
    const MainDiv = styled.div`
        padding: 3.1rem 6.4rem 2.9rem;
        text-align: center;
    `
    const P1 = styled.p`
        font-size:1.4rem;
        line-height:2.6rem;
        font-weight: 500;
    `;

    const Foot = styled.div`
        border-top: 1px solid #C4C4C4;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 7.4rem;
    `
    const Button = styled.button`
        padding: 1.1rem 1.6rem;
        border: 0rem;
        background-color: #007C89;
        color: white;
        margin-right: 2.4rem;
        font-weight: 500;
        letter-spacing: -3%;
    `

    return (
        <Main>
            <PopUp >
                <Nav>Review Your Campaign</Nav>
                <img style={{position: 'absolute',top:"24.7rem", left:"72.3rem", cursor: 'pointer'}} src="/images/closeSign.svg" alt=""/>
                <MainDiv>
                    <P1 style={{fontWeight:"400"}}>You’re about to send a campaign to:</P1>
                    <P1>Campaign Name</P1>
                    <P1>3 subscribers</P1>
                </MainDiv>
                <Foot>
                    <Button onClick={()=>setStatus(false)} >Send Now</Button>
                    <Link to="/" style={{color: '#007C89', fontSize:'1.6rem',fontWeight:'500', lineHeight:'20rem'}} >Cancel</Link>
                </Foot>
            </PopUp>
        </Main>
    )
}