import { useState } from "react";
import styles from "./BlocksTab.module.css";
import { Navbar } from "./BlockTabNavbar";
import LeftBar from "./LeftBar";
export const BlocksTab = () => {

    const [showDesc, setshowDesc] = useState(true)
    const [isHidden, setHidden] = useState({})
    const [border, setBorder] = useState({})
    const [path, setPath] = useState("./BlocksTabImages/images.png")
    const [imgStyle, setImgStyle] = useState({})

    function handleClick() {
        setHidden({ border: "2px dashed #007C89", borderRadius: "4px" })
        setPath("./BlocksTabImages/imgClick.png")
        setImgStyle({
            width: "112px"
        })
        setBorder({ border: "2px dashed #007C89" })
    }

    return (
        <>
            {/* header */}
                <Navbar />

            {/* leftdiv image */}
            <div className={styles.leftbar}>
                <LeftBar isHidden={isHidden} setHidden={setHidden} border={border} />
            </div>

            {/* right div */}
            <div className={styles.rightbar}>
                <div className={styles.rightNavbar}>
                    <div className={styles.highlightedBlock}>
                        <svg
                            width="19"
                            height="22"
                            viewBox="0 0 19 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17 20H6V6H17V20ZM17 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21071 17.5304 4 17 4ZM14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16H2V2H14V0Z"
                                fill="#241C15"
                                fill-opacity="0.5"
                            />
                        </svg>{" "}
                        <p>Blocks</p>
                    </div>
                    <div>
                        <svg
                            width="22"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.4998 17.5998L2.7998 18.1998V9.1998L0.399803 14.9998C-0.000196815 16.0998 0.499803 17.1998 1.4998 17.5998ZM14.1998 2.7998L19.1998 14.7998L11.8998 17.7998L6.8998 5.89981V5.7998L14.1998 2.7998ZM14.2998 0.799805C13.9998 0.799805 13.7998 0.799805 13.4998 0.899805L6.0998 3.9998C5.3998 4.2998 4.8998 4.9998 4.8998 5.7998C4.8998 5.9998 4.8998 6.2998 4.9998 6.5998L9.9998 18.4998C10.2998 19.2998 10.9998 19.6998 11.7998 19.6998C12.0998 19.6998 12.2998 19.6998 12.5998 19.5998L19.9998 16.4998C20.9998 16.0998 21.4998 14.8998 21.0998 13.8998L16.0998 1.9998C15.7998 1.1998 14.9998 0.799805 14.2998 0.799805ZM9.4998 7.8998C8.8998 7.8998 8.4998 7.4998 8.4998 6.8998C8.4998 6.2998 8.8998 5.89981 9.4998 5.89981C10.0998 5.89981 10.4998 6.3998 10.4998 6.8998C10.4998 7.3998 10.0998 7.8998 9.4998 7.8998ZM4.8998 17.7998C4.8998 18.8998 5.7998 19.7998 6.8998 19.7998H8.2998L4.8998 11.4998V17.7998Z"
                                fill="#241C15"
                                fill-opacity="0.5"
                            />
                        </svg>{" "}
                        <p>Style</p>
                    </div>
                    <div>
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 22C10.7348 22 10.4804 21.8946 10.2929 21.7071C10.1054 21.5196 10 21.2652 10 21V18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H15.9L12.2 21.71C12 21.89 11.76 22 11.5 22H11ZM12 16V19.08L15.08 16H20V6H6V16H12ZM2 14H0V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H18V2H2V14ZM8 8H18V10H8V8ZM8 12H16V14H8V12Z"
                                fill="#241C15"
                                fill-opacity="0.5"
                            />
                        </svg>{" "}
                        <p>Comments</p>
                    </div>
                </div>
                <div class={styles.lineThrough}></div>
                {showDesc ?
                    <div className={styles.commentBox}>
                        <p className={styles.rightBoxDescription}>
                            Drag any of the blocks below into the campaign preview on the left.
                            Go ahead, try dragging a text block to the top of your campaign.
                        </p>
                        <p className={styles.remove} onClick={() => setshowDesc(false)}><u> Skip these messages</u></p>
                    </div> : null}
                {showDesc ?
                    <div className={styles.bottomTip}>
                        <svg
                            width="18"
                            height="11"
                            viewBox="0 0 18 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.77136 10.0647C9.37137 10.5496 8.62843 10.5496 8.22845 10.0647L0.339645 0.5L17.6602 0.5L9.77136 10.0647Z"
                                fill="#241C15"
                            />
                        </svg>
                    </div> : null}

                <div className={styles.imagesCollection}>
                    <img src="./BlocksTabImages/textbox.png" alt="" />
                    <img src="./BlocksTabImages/boxedtext.png" alt="" />
                    <img src="./BlocksTabImages/divider.png" alt="" />
                    <img onClick={handleClick} style={imgStyle} src={path} alt="" />
                    <img src="./BlocksTabImages/imagegroup.png" alt="" />
                    <img src="./BlocksTabImages/imagecard.png" alt="" />
                    <img src="./BlocksTabImages/imagetext.png" alt="" />
                    <img src="./BlocksTabImages/share.png" alt="" />
                    <img src="./BlocksTabImages/socialfollow.png" alt="" />
                    <img src="./BlocksTabImages/buttonimage.png" alt="" />
                    <img src="./BlocksTabImages/footercardimage.png" alt="" />
                    <img src="./BlocksTabImages/codecardimage.png" alt="" />
                    <img src="./BlocksTabImages/videocardimage.png" alt="" />
                </div>
            </div>
        </>
    );
};
