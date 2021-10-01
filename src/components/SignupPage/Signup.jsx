import styles from "./Signup.module.css";
import {useState} from "react";
import styled from "styled-components";
import PasswordTab from "./PasswordTab";

export default function Signup(){
    const [email, setEmail] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false)
    const [user, setUser] = useState(false);
    const buttonStatus = !email&&!user&&!password;
    var pattern = /^[^ ]+@[^]+\.[a-z]{2,3}$/;

    console.log(buttonStatus);

    const Button = styled.button`
        height:4.5rem;
        width: 13.7rem;
        background-color:${buttonStatus?"#007C89":"white"};
        border: 1px solid ${buttonStatus?"#007C89":"#BDBBB9"};
        color: ${buttonStatus?"#FFFFFF":"#BDBBB9"};
        font-size: 1.6rem;
        letter-spacing: -3%;
        font-weight: 500;
        cursor: pointer;
    `;

    const CheckBox = styled.input`
        height: 2.2rem;
        width: 2.3rem;
        border: 1px solid #BDBBB9;
        border-radius: 0.2rem;
        margin: 0rem 1rem 0rem 4.3rem;
    `;

    const handleEmail= (e)=>{
        if(e.target.value.match(pattern)|| e.target.value===""){
            setEmail(false);
            e.target.style.outlineColor = '#007C89';
        } else {
            setEmail(true);
            e.target.style.outlineColor = '#F25F25';
        }
    }

    const handleUser = ()=>{
        // if(e.target.value.match()|| e.target.value===""){
        //     setEmail(false);
        //     e.target.style.outlineColor = '#007C89';
        // } else {
        //     setEmail(true);
        //     e.target.style.outlineColor = '#F25F25';
        // }

    }

    const handleStatus = ()=>{
    }

    const handleCheck = (e)=>{
        console.log(e.target.value);
    }

    return (
        <div className={styles.signup}>
            <img src="/images/chimpLogo.svg" alt="" />
            <div className={styles.signupComponent}>
                <h3>Welcome to Mailchimp</h3>
                <p>Find your people. Engage your customers. Build your brand. Do it all with Mailchimp’s Marketing Platform. Already have an account? <span>Log in</span></p>
                <div className={styles.form}>
                    <div>
                        <p>Email</p>
                        <input type="email" onChange={handleEmail}  required/>
                        <br />
                        {email?<span>Please enter a valid email</span>:<></>}
                    </div>
                    <div>
                        <p>Username</p>
                        <input type="text" onChange={handleUser} onClick={()=>setUsername(true)} onBlur={()=>setUsername(false)}/>
                        <br />
                        {username ? <h5>Choose a username that contains only letters and numbers, or use your email address. This is for login only.</h5>:
                        user?<span>Another user with this username already exists. Maybe it’s your evil twin. Spooky</span>:<></>}
                    </div>
                    <PasswordTab password={password} setPassword={setPassword}/>
                    <Button type="submit">Sign Up</Button>
                    <CheckBox type="checkbox" onClick={handleCheck} />
                    <p>I don't want to receive updates from Mailchimp related to marketing best practices, product and feature updates, and promotions.</p>
                </div>
                <p>By clicking the "Sign Up" button, you are creating a Mailchimp account, and you agree to Mailchimp's <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
                <p>©2001–2021 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Cookie Preferences, Privacy, and Terms.</p>
            </div>
            <img className={styles.image} src="/images/signup.png" alt="" />
        </div>
    )
}