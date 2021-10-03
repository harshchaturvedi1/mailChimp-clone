import styles from "./Template.module.css"
import AllTemplates from "./AllTemplate"

export default function SelectTemplate(){
    const featured = [
        {
            img:"temp1.svg",
            p1:"Sell Products",
            p2:"Market a line of products or promote seasonal items."
        },
        {
            img:"temp2.svg",
            p1:"Make a Announcement",
            p2:"Share details about a sale, event, or other big news."
        },
        {
            img:"temp3.svg",
            p1:"Tell A Story",
            p2:"Send a newsletter to let people know what you’ve been up to."
        },
        {
            img:"temp4.svg",
            p1:"Follow Up",
            p2:"Send a tailored email to people who have engaged with you."
        },
        {
            img:"temp5.svg",
            p1:"Educate",
            p2:"Explain your products or share knowledge about a topic."
        }
    ];
    const basic = [
        {
            img:"temp21.png",
            p1:"1 Column",
            p2:""
        },
        {
            img:"temp21.png",
            p1:"1 Column - Full Width",
            p2:""
        },
        {
            img:"temp23.png",
            p1:"1 : 2 Column",
            p2:""
        },
        {
            img:"temp21.png",
            p1:"1 : 2 Column - Full Width",
            p2:""
        },
        {
            img:"temp21.png",
            p1:"1 : 2 : 1 Column",
            p2:""
        },
        {
            img:"temp27.png",
            p1:"1 : 2 : 1 Column - Full Width",
            p2:""
        },
        {
            img:"temp27.png",
            p1:"1 : 3 Column",
            p2:""
        },
        {
            img:"temp23.png",
            p1:"1 : 3 Column - Full Width",
            p2:""
        },
        {
            img:"temp27.png",
            p1:"Simple Text",
            p2:""
        }
    ];

    return(
        <>
            <h1 className={styles.mainH1}>Select a template</h1>
            <div className={styles.bar}>
                <span>Layouts</span>
                <span>Themes</span>
                <span>Saved templates</span>
                <span>Campaigns</span>
                <span>Code your own</span>
            </div>
            <div className={styles.upgrade}>
                <img src="/images/upgrade.svg" alt="upgrade" />
                <div>
                    <p>More ways to tell your story</p>
                    <p>Get access to a variety of layouts that can keep your emails looking professional and fresh.</p>
                </div>
                <button>Upgrade Now</button>
            </div>
            <p>Featured</p>
            <div className={styles.main}>
                <AllTemplates data={featured} />
            </div>
            <p>Basic</p>
            <div className={styles.main}>
                <AllTemplates data={basic} />
            </div>
        </>
    )
}