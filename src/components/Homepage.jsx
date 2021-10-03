import styles from "./Homepage.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const [changeColor, setChangeColor] = useState(false);
  const [color, setColor] = useState("transparent");
  const scrollevent = (e) => {
    if (window.scrollY > 100) {
      return setColor("#ffff");
    } else {
      return setColor("transparent");
    }
  };
  localStorage.setItem("CanpaignSubmit","false");
  useEffect(() => {
    window.addEventListener("scroll", scrollevent);
    return () => window.removeEventListener("scroll", scrollevent);
  }, []);
  return (
    <div className={styles.main_div}>
      {active1 ? (
        <div className={styles.purplenot}>
          <div
            style={{
              marginLeft: "37rem",
              display: "flex",
              alignItems: "center",
            }}
            className={styles.addyellow}
            onMouseLeave={() => setChangeColor(false)}
            onMouseOver={() => setChangeColor(true)}
          >
            <div style={{ marginTop: ".5rem" }}>
              <div
                style={{
                  position: "absolute",
                  display: changeColor ? "none" : "block",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0.5625C4.34784 0.5625 0.5625 4.34784 0.5625 9C0.5625 13.6527 4.34784 17.4375 9 17.4375C13.6524 17.4375 17.4375 13.6527 17.4375 9C17.4375 4.34784 13.6527 0.5625 9 0.5625ZM14.6382 13.5574C14.3051 13.2554 13.9484 12.9805 13.5714 12.7353C14.044 11.7798 14.3314 10.7436 14.4186 9.68119H16.2214C16.088 11.1012 15.5371 12.45 14.6382 13.5574ZM1.77919 9.68119H3.55022C3.63807 10.7493 3.92812 11.791 4.40494 12.7507C4.03687 12.9922 3.6881 13.2619 3.36178 13.5574C2.46282 12.4501 1.9121 11.1012 1.77919 9.68119ZM3.36178 4.44291C3.68775 4.73871 4.03655 5.00833 4.40494 5.24925C3.90106 6.2627 3.60609 7.36712 3.53756 8.49684H1.76428C1.86656 7.01325 2.42447 5.59744 3.36178 4.44291ZM8.40797 2.68847V5.40197C7.59527 5.33809 6.79944 5.13597 6.05475 4.80431C6.67411 3.93465 7.47759 3.21222 8.40797 2.68847ZM8.40797 6.58912V8.49684H4.72416C4.78923 7.56924 5.03345 6.66303 5.44331 5.82834C6.37617 6.26258 7.38129 6.52051 8.40797 6.58912ZM8.40797 9.68119V11.4109C7.37781 11.48 6.36942 11.7396 5.43403 12.1767C5.05395 11.3935 4.81833 10.5481 4.7385 9.68119H8.40797ZM8.40797 12.5986V15.3177C7.47126 14.7979 6.66286 14.075 6.04209 13.2019C6.79031 12.8667 7.59059 12.6626 8.40797 12.5986ZM9.59203 15.293V12.5986C10.4062 12.6633 11.1901 12.8624 11.9199 13.1847C11.3067 14.0486 10.5123 14.7681 9.59203 15.293ZM9.59203 11.4109V9.68119H13.2297C13.1474 10.5427 12.9104 11.3822 12.53 12.1596C11.6045 11.7328 10.6088 11.4791 9.59203 11.4109ZM9.59203 8.49684V6.58912C10.6093 6.52125 11.6056 6.2675 12.5314 5.84044C12.9375 6.67186 13.1796 7.57378 13.2443 8.49684H9.59203ZM9.59203 5.40197V2.70647C10.5129 3.23111 11.308 3.95064 11.9216 4.81472C11.1837 5.14032 10.3961 5.33887 9.59203 5.40197ZM12.5249 3.64669C11.9692 2.97439 11.3129 2.39207 10.5792 1.92037C11.7838 2.18989 12.8995 2.76305 13.8201 3.58538C13.554 3.8249 13.2705 4.04422 12.9718 4.24153C12.8321 4.03648 12.6829 3.83799 12.5249 3.64669ZM5.44359 3.64697C5.28942 3.8339 5.1435 4.02749 5.00625 4.22719C4.71565 4.0335 4.4394 3.8191 4.17966 3.58566C5.08809 2.77431 6.1865 2.20522 7.37325 1.93106C6.64586 2.40071 5.99503 2.97944 5.44359 3.64697ZM5.00653 13.7731C5.12128 13.9402 5.24222 14.1033 5.36962 14.2619C5.93677 14.9681 6.61375 15.5785 7.37466 16.0698C6.18744 15.7958 5.08859 15.2266 4.17994 14.4149C4.43959 14.1813 4.71585 13.9668 5.00653 13.7731ZM12.5364 14.3393C12.6901 14.1521 12.8356 13.9584 12.9727 13.7587C13.2711 13.9562 13.5544 14.1755 13.8203 14.4149C12.8996 15.2371 11.784 15.8102 10.5795 16.0799C11.3182 15.6048 11.9784 15.0175 12.5364 14.3393ZM14.4312 8.49684C14.3634 7.37285 14.0711 6.27384 13.5714 5.26472C13.9484 5.01973 14.3052 4.74491 14.6382 4.44291C15.5757 5.59735 16.1336 7.01321 16.2357 8.49684H14.4312Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0.5625C4.34784 0.5625 0.5625 4.34784 0.5625 9C0.5625 13.6527 4.34784 17.4375 9 17.4375C13.6524 17.4375 17.4375 13.6527 17.4375 9C17.4375 4.34784 13.6527 0.5625 9 0.5625ZM14.6382 13.5574C14.3051 13.2554 13.9484 12.9805 13.5714 12.7353C14.044 11.7798 14.3314 10.7436 14.4186 9.68119H16.2214C16.088 11.1012 15.5371 12.45 14.6382 13.5574ZM1.77919 9.68119H3.55022C3.63807 10.7493 3.92812 11.791 4.40494 12.7507C4.03687 12.9922 3.6881 13.2619 3.36178 13.5574C2.46282 12.4501 1.9121 11.1012 1.77919 9.68119ZM3.36178 4.44291C3.68775 4.73871 4.03655 5.00833 4.40494 5.24925C3.90106 6.2627 3.60609 7.36712 3.53756 8.49684H1.76428C1.86656 7.01325 2.42447 5.59744 3.36178 4.44291ZM8.40797 2.68847V5.40197C7.59527 5.33809 6.79944 5.13597 6.05475 4.80431C6.67411 3.93465 7.47759 3.21222 8.40797 2.68847ZM8.40797 6.58912V8.49684H4.72416C4.78923 7.56924 5.03345 6.66303 5.44331 5.82834C6.37617 6.26258 7.38129 6.52051 8.40797 6.58912ZM8.40797 9.68119V11.4109C7.37781 11.48 6.36942 11.7396 5.43403 12.1767C5.05395 11.3935 4.81833 10.5481 4.7385 9.68119H8.40797ZM8.40797 12.5986V15.3177C7.47126 14.7979 6.66286 14.075 6.04209 13.2019C6.79031 12.8667 7.59059 12.6626 8.40797 12.5986ZM9.59203 15.293V12.5986C10.4062 12.6633 11.1901 12.8624 11.9199 13.1847C11.3067 14.0486 10.5123 14.7681 9.59203 15.293ZM9.59203 11.4109V9.68119H13.2297C13.1474 10.5427 12.9104 11.3822 12.53 12.1596C11.6045 11.7328 10.6088 11.4791 9.59203 11.4109ZM9.59203 8.49684V6.58912C10.6093 6.52125 11.6056 6.2675 12.5314 5.84044C12.9375 6.67186 13.1796 7.57378 13.2443 8.49684H9.59203ZM9.59203 5.40197V2.70647C10.5129 3.23111 11.308 3.95064 11.9216 4.81472C11.1837 5.14032 10.3961 5.33887 9.59203 5.40197ZM12.5249 3.64669C11.9692 2.97439 11.3129 2.39207 10.5792 1.92037C11.7838 2.18989 12.8995 2.76305 13.8201 3.58538C13.554 3.8249 13.2705 4.04422 12.9718 4.24153C12.8321 4.03648 12.6829 3.83799 12.5249 3.64669ZM5.44359 3.64697C5.28942 3.8339 5.1435 4.02749 5.00625 4.22719C4.71565 4.0335 4.4394 3.8191 4.17966 3.58566C5.08809 2.77431 6.1865 2.20522 7.37325 1.93106C6.64586 2.40071 5.99503 2.97944 5.44359 3.64697ZM5.00653 13.7731C5.12128 13.9402 5.24222 14.1033 5.36962 14.2619C5.93677 14.9681 6.61375 15.5785 7.37466 16.0698C6.18744 15.7958 5.08859 15.2266 4.17994 14.4149C4.43959 14.1813 4.71585 13.9668 5.00653 13.7731ZM12.5364 14.3393C12.6901 14.1521 12.8356 13.9584 12.9727 13.7587C13.2711 13.9562 13.5544 14.1755 13.8203 14.4149C12.8996 15.2371 11.784 15.8102 10.5795 16.0799C11.3182 15.6048 11.9784 15.0175 12.5364 14.3393ZM14.4312 8.49684C14.3634 7.37285 14.0711 6.27384 13.5714 5.26472C13.9484 5.01973 14.3052 4.74491 14.6382 4.44291C15.5757 5.59735 16.1336 7.01321 16.2357 8.49684H14.4312Z"
                    fill="#FFE01B"
                  />
                </svg>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <p>&nbsp; This page is now available in other languages.&nbsp;</p>
              <p
                style={{
                  fontSize: "16px",
                  borderBottom: changeColor ? "1px solid yellow" : null,
                }}
              >
                {" "}
                Choose a different language.
              </p>
            </div>
          </div>
          <div className={styles.crossImg} onClick={() => setActive1(false)}>
            <img src="/cross.svg" />
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* <div style={{width:"200px", height:"50px", border:"1px solid"}}> <div style={{width:"50px", height:"20px", border:"1px solid blue", float:"right"}}></div></div> */}
      <div className={styles.navbar} style={{ background: `${color}` }}>
        <div style={{ marginTop: "3rem", display: "flex" }}>
          <div style={{ marginLeft: "3.5rem" }}>Products</div>
          <div style={{ marginLeft: "3.5rem" }}>Resources</div>
          <div style={{ marginLeft: "3.5rem" }}>Inspiration</div>
          <div style={{ marginLeft: "4rem" }}>Pricing</div>
          <div style={{ marginLeft: "23rem", marginTop: "-0.8rem" }}>
            <img src="/logo1.png" />
          </div>
          <div style={{ marginLeft: "-1rem" }}>
            <img src="/logo2.png" />
          </div>
          <div className={styles.logoTag}>
            <img src="/logo3.png" />
          </div>
          <div
            style={{
              marginLeft: "2rem",
              color: "#241C15",
              marginTop: "-.8rem",
            }}
          >
            <button
              style={{
                padding: "10.5px 31px",
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: "14px",
                color: "#241C15",
                lineHeight: "15px",
                border: " 0.8px solid #241C15",
                background: "transparent",
              }}
            >
              Log In
            </button>
          </div>
          <div style={{ marginLeft: "2rem", marginTop: "-1rem" }}>
            <button
              className={styles.navSingup}
              style={{
                padding: "12px 36px",
                background: " #007C89",
                color: "#FFF",
                border: "none",
              }}
            >
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.mainpage}>
        <div className={styles.mainleft}>
          <div className={styles.leftone}>
            Get down to business and grow sales
          </div>
          <div className={styles.lefttwo}>
            Engage your customers and boost your business with Mainchimp’s
            advanced, yet easy-to-use marketing platform.
          </div>
          <div className={styles.leftthree}>
            <button className={styles.btnleft}>
              <Link to="/signup">Sign Up</Link>
            </button>
            <div className={styles.com}>Compare Plans</div>
          </div>
        </div>
        <div className={styles.mainright}>
          <img src="/mainimg.png" />
        </div>
      </div>
      {active2 ? (
        <div className={styles.blackbar}>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "90rem",
                marginLeft: "1rem",
                marginTop: "1.5rem",
              }}
            >
              Our website stores cookies on your device and discloses
              information in accordance with our Cookie Statement. Choose
              “Customize Settings” to c to control ocookies. We may collect
              certain aggregate and anonymized data from your browser
              independent of your cookie preferences. Cookie Statement
            </div>
            <div className={styles.customiseBtn}>
              <button
                style={{
                  height: "3.3rem",
                  width: "19rem",
                  background: "transparent",
                  color: "#ffff",
                  border: "1px solid  #ffff",
                }}
              >
                Customise Settings
              </button>
            </div>
            <div
              style={{ marginLeft: "1.7rem", marginTop: "2.8rem" }}
              onClick={() => setActive2(false)}
            >
              <img src="/cross.svg" />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.bluediv}>
          <div style={{ marginTop: "2rem", margin: "0 auto" }}>
            Mailchimp is being acquired by Intuit! Our Co-founder and CEO shared
            the news with our customers.{" "}
            <span style={{ color: "blue", textDecoration: "underline" }}>
              Read here.
            </span>
          </div>
        </div>
      )}
      <div className={styles.Doit}>Do it all with Mailchimp</div>
      <div className={styles.audience}>
        Bring your audience data, marketing channels, and insights together so
        you can reach your goals faster—all from a single platform.
      </div>
      <div className={styles.secondlast}>
        <div className={styles.slleft}>
          <div
            className={styles.sllf}
            style={{ marginLeft: "3.25rem", paddingLeft: "1rem" }}
          >
            Get your business online
          </div>
          <div className={styles.sllm} style={{ marginLeft: "6rem" }}>
            Give your brand a home with a custom domain. Then launch a website
            to sell products or take appointments, all with built-in marketing
            tools to help you boost sales and find fans.
          </div>
          <div>
            <button className={styles.btnsl}>Websites and Stores </button>
          </div>
        </div>
        <div className={styles.slright}>
          <div>
            <img src="/flone.png" />
          </div>
        </div>
      </div>
      <div className={styles.secondlast}>
        <div className={styles.slleft}>
          <div className={styles.sllf} style={{ marginLeft: "1rem" }}>
            Market your business
          </div>
          <div className={styles.sllm}>
            Send the right messages on all the right channels. Build emails,
            social ads, landing pages, postcards, and more from one place.
          </div>
          <div>
            <button className={styles.btnsl} style={{ marginLeft: "-8rem" }}>
              Marketing campaigns{" "}
            </button>
          </div>
        </div>
        <div className={styles.slright}>
          <div>
            <img src="/frothy.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
