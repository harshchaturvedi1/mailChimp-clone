import styles from "./Template.module.css"

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <img src="/images/chimpLogo2.svg" ></img>
            <p>Create a template</p>
            <div>
                <p>Help</p>
                <p>Cancel</p>
            </div>
        </div>
    )
}