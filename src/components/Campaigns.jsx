import { Navbar } from "./Dashboard/Navbar";
import styles from "./Campaigns.module.css";
import { useState } from "react";
import CampaignsSelectTab from "./CampaignsSelectTab";
export default function Campaigns() {
    const [save1, setSave1] = useState(false);
    const [save2, setSave2] = useState(false);
    const [save3, setSave3] = useState(false);
    const [save4, setSave4] = useState(false);
    const [status, setStatus] = useState(true);
    const [totext1, setTotext1] = useState("");
    const [totext2, setTotext2] = useState("");
    const [totext3, setTotext3] = useState("");
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [subtext, setSubtext] = useState("");
    const [subtext2, setSubtext2] = useState("");
    const [from, setFrom] = useState(false);
    const [fromgt, setFromgt] = useState(false);
    const [sub, setSub] = useState(false);
    const [subgt, setSubgt] = useState(false);
    const [subtit, setSubtit] = useState(false);
    const [togt, setTogt] = useState(false);
    const [to, setTo] = useState(false);
    const [totit, setTotit] = useState(false);
    const [final, setFinal] = useState(true);

    const user_name = JSON.parse(localStorage.getItem("user"));
    const campaign = JSON.parse(localStorage.getItem("Compaign Name"));

    const togglefgt = () => {
        setFromgt(true);
        setFrom(false);
    };
    const togglesubgt = () => {
        setSave3(true);
        setSave2(false);
        setSubgt(true);
        setSub(false);
        setSubtit(true);
    };
    const toggletogt = () => {
        setSave1(true);
        setSave2(true);
        setTogt(true);
        setTotit(true);
        setTo(false);
    };
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "9.6rem" }}>
                    <Navbar />
                </div>
                <div className={styles.middle}>
                    <div style={{ display: "flex", marginBottom: "1.6rem" }}>
                        <div className={styles.campaign}>Campaigns</div>
                        <div style={{ marginLeft: "7rem", marginTop: "2.8rem" }}>
                            <img src="/sidearrow.png" />
                        </div>
                    </div>
                    <div className={styles.allcamp}>
                        <div style={{ marginTop: "1.6rem", marginLeft: "1.9rem" }}>
                            All Campaigns
                        </div>
                    </div>
                    <div className={styles.email}>
                        <div style={{ marginTop: "1.6rem", marginLeft: "1.9rem" }}>
                            Email Templates
                        </div>
                    </div>
                    <div className={styles.email}>
                        <div style={{ marginTop: "1.6rem", marginLeft: "1.9rem" }}>
                            Reports
                        </div>
                    </div>
                    <div className={styles.upgrade}>
                        <button className={styles.upgradebtn}>Upgrade</button>
                    </div>
                    <div style={{ marginLeft: "1.7rem" }}>
                        <p className={styles.miduser}>{user_name.username}</p>
                        <p className={styles.miduserdet}>{campaign}</p>
                    </div>
                </div>
                {status ? (
                    <div className={styles.last}>
                        <div className={styles.lastfirst_div}>
                            {!save1 ? (
                                <>
                                    {" "}
                                    <div style={{ marginLeft: "2.9rem", marginTop: "2.8rem" }}>
                                        <img src="/mail.png" />
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            marginLeft: "1.6rem",
                                        }}
                                    >
                                        <p className={styles.keepit}>Let's get started!</p>
                                        <p className={styles.drfemail}>Draft Email</p>
                                    </div>
                                    <div className={styles.draft}>Draft</div>
                                    <div
                                        className={styles.flater}
                                        style={{ marginLeft: "50rem" }}
                                    >
                                        Finish Later
                                    </div>
                                    <div>
                                        <button
                                            className={styles.schbtn}
                                            style={{ marginLeft: "2rem" }}
                                        >
                                            Schedule
                                        </button>
                                    </div>
                                    <div style={{ marginLeft: "2rem" }}>
                                        <button className={styles.sendbtn}>Send</button>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                            {save2 ? (
                                <>
                                    {" "}
                                    <div style={{ marginLeft: "2.9rem", marginTop: "2.8rem" }}>
                                        <img src="/mail.png" />
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            marginLeft: "1.6rem",
                                        }}
                                    >
                                        <p className={styles.keepit}>Keep it up!</p>
                                        <p className={styles.drfemail}>Draft Email</p>
                                    </div>
                                    <div className={styles.draft}>Draft</div>
                                    <div
                                        className={styles.flater}
                                        style={{ marginLeft: "54rem" }}
                                    >
                                        Finish Later
                                    </div>
                                    <div>
                                        <button
                                            className={styles.schbtn}
                                            style={{ marginLeft: "2rem" }}
                                        >
                                            Schedule
                                        </button>
                                    </div>
                                    <div style={{ marginLeft: "2rem" }}>
                                        <button className={styles.sendbtn}>Send</button>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                            {save3 ? (
                                <>
                                    {" "}
                                    <div style={{ marginLeft: "2.9rem", marginTop: "2.8rem" }}>
                                        <img src="/mail.png" />
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            marginLeft: "1.6rem",
                                        }}
                                    >
                                        <p className={styles.keepit}>You're almost finished!</p>
                                        <p className={styles.drfemail}>Draft Email</p>
                                    </div>
                                    <div className={styles.draft}>Draft</div>
                                    <div
                                        className={styles.flater}
                                        style={{ marginLeft: "45rem" }}
                                    >
                                        Finish Later
                                    </div>
                                    <div>
                                        <button
                                            className={styles.schbtn}
                                            style={{ marginLeft: "2rem" }}
                                        >
                                            Schedule
                                        </button>
                                    </div>
                                    <div style={{ marginLeft: "2rem" }}>
                                        <button className={styles.sendbtn}>Send</button>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div style={{ marginLeft: "3rem" }}>
                            <p className={styles.lastsec_div}>{campaign}</p>
                            <p className={styles.editname}>Edit Name</p>
                        </div>
                        <div className={styles.lastlast}>
                            <div className={styles.llf}>
                                <div
                                    style={{
                                        width: "2.4rem",
                                        height: "2.4rem",
                                        marginTop: "2.4rem",
                                        marginLeft: "2rem",
                                    }}
                                >
                                    <img src={togt ? "/greentick.png" : "/whitetick.png"} />
                                </div>
                                <div style={{ marginLeft: "1rem", marginTop: "0.4rem" }}>
                                    <p className={styles.to}>To</p>
                                    <div
                                        style={{
                                            marginRight: "22rem",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        {!totit ? (
                                            <p className={styles.who}>
                                                Who are you sending this campaign to?
                                            </p>
                                        ) : (
                                            <></>
                                        )}
                                        {to ? (
                                            <>
                                                <div
                                                    style={{
                                                        marginRight: "22rem",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            marginTop: "1rem",
                                                        }}
                                                    >
                                                        <div className={styles.subtitle}>Email</div>
                                                        <div
                                                            className={styles.subchar}
                                                            style={{ marginLeft: "32.4rem" }}
                                                        >
                                                            {totext1.length} characters
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <textarea
                                                            style={{height: "10rem", padding: "2rem", outline: "none"}}
                                                            type="text"
                                                            className={styles.subinp}
                                                            onChange={(e) => setTotext1(e.target.value)}
                                                        />
                                                    </div>
                                                    {/* <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            marginTop: "1rem",
                                                        }}
                                                    >
                                                        <div className={styles.subtitle}>Name</div>
                                                        <div
                                                            className={styles.subchar}
                                                            style={{ marginLeft: "31.9rem" }}
                                                        >
                                                            {totext2.length} characters
                                                        </div>
                                                    </div> */}
                                                    <div style={{display:"none"}}>
                                                        <input
                                                            type="text"
                                                            className={styles.subinp}
                                                            onChange={(e) => setTotext2(e.target.value)}
                                                            value="123"
                                                        />
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            marginTop: "1rem",
                                                            display:"none"
                                                        }}
                                                    >
                                                        <div className={styles.subtitle}>Address</div>
                                                        <div
                                                            className={styles.subchar}
                                                            style={{ marginLeft: "30.4rem" }}
                                                        >
                                                            {totext3.length} characters
                                                        </div>
                                                    </div>
                                                    <div style={{display:"none"}}>
                                                        <input
                                                            type="text"
                                                            className={styles.subinp}
                                                            onChange={(e) => setTotext3(e.target.value)}
                                                            value="123"
                                                        />
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            marginTop: "1rem",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                marginBottom: "1.5rem",
                                                                marginTop: "1rem",
                                                            }}
                                                        >
                                                            <button
                                                                style={{
                                                                    width: "7.6rem",
                                                                    height: "4rem",
                                                                    border: "1px solid #D9D9D9",
                                                                    borderRadius: "0.2rem",
                                                                    background: !(
                                                                        totext1.length > 0 
                                                                    )
                                                                        ? "transparent"
                                                                        : "#716B67",
                                                                    color: !(
                                                                        totext1.length > 0
                                                                    )
                                                                        ? "#D9D9D9"
                                                                        : "#FFFFFF",
                                                                }}
                                                                className={styles.subsavebtn}
                                                                onClick={() => toggletogt()}
                                                            >
                                                                Save
                                                            </button>
                                                        </div>
                                                        <div
                                                            style={{ marginTop: "2.1rem" }}
                                                            className={styles.subcancelbtn}
                                                            onClick={() => setTo(false)}
                                                        >
                                                            Cancel
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    {togt ? (
                                        <>
                                            <p style={{ marginTop: "1.5rem" }}>
                                                <span className={styles.to}>
                                                    All subscribed contacts
                                                </span>
                                                <span className={styles.aud}> in the audience</span>
                                                <span className={styles.to}> Designing. </span>
                                                <span className={styles.rec2}>3 recipients</span>
                                            </p>
                                            <p
                                                style={{ marginTop: "0.5rem", marginBottom: "1rem" }}
                                                className={styles.ify}
                                            >
                                                If you’d like to segment your audience, you can{" "}
                                                <span style={{ color: "#007C89" }}>
                                                    edit your recipients.
                                                </span>
                                            </p>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                {!to ? (
                                    <div style={{ marginLeft: "2.5rem" }}>
                                        <button
                                            className={styles.llfbtn}
                                            style={{
                                                background: !togt ? " #716B67" : "#F4F4F4",
                                                color: !togt ? "#ffff" : " #57514A",
                                            }}
                                            onClick={() => setTo(true)}
                                        >
                                            {!togt ? "Add Recipients" : "Edit Recipients"}
                                        </button>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className={styles.lls}>
                                <div
                                    style={{
                                        width: "2.4rem",
                                        height: "2.4rem",
                                        marginTop: "2.4rem",
                                        marginLeft: "2rem",
                                    }}
                                >
                                    <img src={fromgt ? "/greentick.png" : "/whitetick.png"} />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginLeft: "1rem",
                                    }}
                                >
                                    <p className={styles.from}>From</p>
                                    {fromgt ? (
                                        <div
                                            style={{
                                                marginRight: "-0.7rem",
                                                marginTop: "1rem",
                                                marginBottom: "1.5rem",
                                            }}
                                        >
                                            <p className={styles.finaltext}>
                                                {text}-{text2}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className={styles.who}>Who is sending this campaign?</p>
                                    )}
                                    {from ? (
                                        <>
                                            <div style={{ display: "flex", flexDirection: "row" }}>
                                                <div className={styles.input_title}>Name</div>
                                                <div className={styles.char}>
                                                    {text.length === 0 ? (
                                                        <div style={{ marginLeft: "9.2rem" }}></div>
                                                    ) : (
                                                        `${text.length} characters`
                                                    )}
                                                </div>
                                                <div
                                                    className={styles.input_title}
                                                    style={{ marginLeft: "4.8rem" }}
                                                >
                                                    Email address
                                                </div>
                                            </div>
                                            <div style={{ display: "flex" }}>
                                                <div>
                                                    <input
                                                        type="text"
                                                        style={{ width: "43rem", height: "3.8rem" }}
                                                        onChange={(e) => setText(e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        style={{
                                                            width: "43rem",
                                                            height: "3.8rem",
                                                            marginLeft: "4rem",
                                                        }}
                                                        onChange={(e) => setText2(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.hint}>
                                                <p>
                                                    Use something subs. will instantly recognize,like your
                                                    company name
                                                </p>
                                            </div>
                                            <div style={{ display: "flex" }}>
                                                <button
                                                    className={styles.savebtn}
                                                    style={{
                                                        background: !(text.length > 0 && text2.length >> 0)
                                                            ? "transparent"
                                                            : "#716B67",
                                                        color: !(
                                                            totext1.length > 0 &&
                                                            totext2.length > 0 &&
                                                            totext3.length > 0
                                                        )
                                                            ? "#D9D9D9"
                                                            : "#FFFFFF",
                                                    }}
                                                    onClick={() => togglefgt()}
                                                >
                                                    Save
                                                </button>
                                                <div
                                                    className={styles.cancel}
                                                    onClick={() => setFrom(false)}
                                                >
                                                    Cancel
                                                </div>
                                            </div>{" "}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                {!from ? (
                                    <div style={{ marginLeft: "61.4rem", marginTop: "2.3rem" }}>
                                        <button
                                            className={styles.addfrom}
                                            onClick={() => setFrom(true)}
                                            style={{
                                                color: fromgt ? "#241C15" : "",
                                                background: fromgt ? "#f4f4f4" : "",
                                                marginLeft: fromgt ? "0.5rem" : "",
                                            }}
                                        >
                                            {!fromgt ? "Add From" : "Edit From"}
                                        </button>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className={styles.llt}>
                                <div
                                    style={{
                                        width: "2.4rem",
                                        height: "2.4rem",
                                        marginTop: "2.4rem",
                                        marginLeft: "2rem",
                                    }}
                                >
                                    <img src={subgt ? "/greentick.png" : "/whitetick.png"} />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginLeft: "1rem",
                                    }}
                                >
                                    <p className={styles.from}>Subject</p>
                                    {!subtit ? (
                                        <p className={styles.who}>
                                            What’s the subject line for this campaign?
                                        </p>
                                    ) : (
                                        <></>
                                    )}
                                    {subgt ? (
                                        <div
                                            style={{
                                                marginRight: "6.8rem",
                                                marginTop: "1.5rem",
                                                marginBottom: "1.5rem",
                                            }}
                                        >
                                            <p className={styles.finaltext}>{subtext}</p>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    {sub ? (
                                        <div style={{ display: "flex" }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    marginRight: "3rem",
                                                }}
                                            >
                                                <div style={{ display: "flex", marginTop: "1rem" }}>
                                                    <div className={styles.subtitle}>Subject</div>
                                                    <div
                                                        className={styles.subchar}
                                                        style={{ marginLeft: "30.8rem" }}
                                                    >
                                                        {subtext.length} characters
                                                    </div>
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        className={styles.subinp}
                                                        onChange={(e) => setSubtext(e.target.value)}
                                                    />
                                                </div>
                                                <div className={styles.firsthint}>
                                                    See how your
                                                    <span className={styles.subblue}>
                                                        {" "}
                                                        recent subject lines
                                                    </span>{" "}
                                                    performed.
                                                    <span className={styles.subblue}>
                                                        View out subject line guide
                                                    </span>
                                                </div>
                                                <div style={{ display: "flex" }}>
                                                    <div className={styles.subtitle}>Preview Text</div>
                                                    <div
                                                        className={styles.subchar}
                                                        style={{ marginLeft: "27.4rem" }}
                                                    >
                                                        {subtext2.length} characters
                                                    </div>
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        className={styles.subinp}
                                                        onChange={(e) => setSubtext2(e.target.value)}
                                                    />
                                                </div>
                                                <div className={styles.firsthint}>
                                                    <span className={styles.subblue}>Preview text </span>
                                                    appears in the inbox after the subject line
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "row" }}>
                                                    <div>
                                                        <button
                                                            style={{
                                                                width: "7.6rem",
                                                                height: "4rem",
                                                                border: "1px solid #D9D9D9",
                                                                borderRadius: "0.2rem",
                                                                background: !(
                                                                    subtext.length > 0 && subtext2.length > 0
                                                                )
                                                                    ? "transparent"
                                                                    : "#716B67",
                                                                color: !(
                                                                    subtext.length > 0 && subtext2.length > 0
                                                                )
                                                                    ? "#D9D9D9"
                                                                    : "#FFFFFF",
                                                            }}
                                                            className={styles.subsavebtn}
                                                            onClick={() => togglesubgt()}
                                                        >
                                                            Save
                                                        </button>
                                                    </div>
                                                    <div
                                                        style={{ marginTop: "1.2rem" }}
                                                        className={styles.subcancelbtn}
                                                        onClick={() => setSub(false)}
                                                    >
                                                        Cancel
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    width: "44rem",
                                                    marginBottom: "3rem",
                                                    marginTop: "-0.5rem",
                                                }}
                                            >
                                                <img
                                                    style={{ width: "100%" }}
                                                    src={
                                                        !(subtext.length > 0 && subtext2.length > 0)
                                                            ? "/imgguide1.png"
                                                            : "/imgprovider3.png"
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                                <div>
                                    {!sub ? (
                                        <button
                                            className={styles.subbtn}
                                            style={{
                                                marginLeft: subgt ? "52.8rem" : "52.4rem",
                                                color: subgt ? "#241c15" : "",
                                                background: subgt ? "#f4f4f4" : "",
                                            }}
                                            onClick={() => setSub(true)}
                                        >
                                            {subgt ? "Edit Subject" : "Add Subject"}
                                        </button>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            <div className={styles.llfo}>
                                <div
                                    style={{
                                        width: "2.4rem",
                                        height: "2.4rem",
                                        marginTop: "2.4rem",
                                        marginLeft: "2rem",
                                    }}
                                >
                                    <img src="/whitetick.png" />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginLeft: "1rem",
                                    }}
                                >
                                    <p className={styles.from}>Content</p>
                                    <p className={styles.who}>
                                        Design the content for your email.
                                    </p>
                                </div>
                                <div
                                    style={{
                                        marginTop: "7rem",
                                        marginLeft: "7rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <img src="/pagelike.png" />
                                </div>
                                <div>
                                    <button
                                        onClick={() => setStatus(false)}
                                        className={styles.subbtn}
                                        style={{ marginLeft: "28rem" }}
                                    >
                                        Design Email
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <CampaignsSelectTab />
                )}
            </div>
            <div style={{ marginLeft: "33.5rem", marginTop: "10rem" }}>
                <div className={styles.syc}>Share Your Campaign</div>
                <div className={styles.camplink}>Campaign Link</div>
                <div className={styles.finallink}>
                    https://mailchi.mp/[xxxxxx]/[xxxxxx]{" "}
                    <span class={styles.linkedit}>Edit</span>
                </div>
                <div className={styles.want}>
                    Want to brand your campaign link? Click edit to create a custom URL.
                </div>
                <div className={styles.addsocial}>
                    Add A Social Post To Your Campaign
                </div>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            width: "3.7rem",
                            marginRight: "1.2rem",
                            marginBottom: "4.7rem",
                        }}
                    >
                        <img
                            style={{ width: "100%" }}
                            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                        />
                    </div>
                    <div
                        style={{
                            width: "13.7rem",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div className={styles.socialname}>Facebook</div>
                        <div className={styles.connect}>Connect Facebook</div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            width: "3.7rem",
                            marginRight: "1.2rem",
                            marginBottom: "4.7rem",
                        }}
                    >
                        <img style={{ width: "100%" }} src="/twitter.png" />
                    </div>
                    <div
                        style={{
                            width: "13.7rem",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div className={styles.socialname}>Twitter</div>
                        <div className={styles.connect}>Connect Twitter</div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            width: "3.7rem",
                            marginRight: "1.2rem",
                            marginBottom: "4.7rem",
                        }}
                    >
                        <img src="/insta.png" />
                    </div>
                    <div
                        style={{
                            width: "50.7rem",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div className={styles.socialname}>Instagram</div>
                        <div className={styles.instadetail}>
                            Add an Instagram post to your campaign by connecting your{" "}
                            <span style={{ color: "#007C89" }}>
                                Instagram business profile{" "}
                            </span>
                            to your Facebook page.
                            <br />
                            <span style={{ color: "#007C89" }}>Connect Facebook</span>
                        </div>
                    </div>
                </div>
                <div
                    style={{ width: "100rem", height: "23.6rem", background: "#F2F2F2" }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "2.6rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                marginTop: "3.4rem",
                                marginBottom: "1.4rem",
                            }}
                        >
                            <div className={styles.setra}>Settings & Tracking</div>
                            <div class={styles.linkedit} style={{ marginTop: "0.3rem" }}>
                                Edit
                            </div>
                        </div>
                        <div className={styles.lastlist}>
                            <li>
                                You're{" "}
                                <span style={{ fontWeight: "500" }}>not using Inbox</span> to
                                manage replies
                            </li>
                        </div>
                        <div className={styles.lastlist}>
                            <li>
                                {" "}
                                Your{" "}
                                <span style={{ fontWeight: "500" }}>
                                    embedded videos will not auto-convert{" "}
                                </span>
                                into linked thumbnail images.
                            </li>
                        </div>
                        <div className={styles.lastlist}>
                            <li>
                                {" "}
                                You're{" "}
                                <span style={{ fontWeight: "500" }}>tracking opens.</span>
                            </li>
                        </div>
                        <div className={styles.lastlist}>
                            <li>
                                {" "}
                                You're{" "}
                                <span style={{ fontWeight: "500" }}>tracking clicks.</span>
                            </li>
                        </div>
                        <div className={styles.lastlist}>
                            <li>
                                {" "}
                                You're{" "}
                                <span style={{ fontWeight: "500" }}>
                                    not tracking plain-text clicks.
                                </span>
                            </li>
                        </div>
                        <div className={styles.lastlist}>
                            <li>
                                {" "}
                                You're{" "}
                                <span style={{ fontWeight: "500" }}>
                                    not tracking e-commerce link activity.
                                </span>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
