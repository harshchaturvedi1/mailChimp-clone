import styles from "./BlocksTab.module.css";

export const BlocksTab = () => {
    return (
        <>
            <div className={styles.navbar}>
                <img src="./BlocksTabImages/navbar.png" alt="" />
            </div>
            <div className={styles.sidebar}>
                <img src="./BlocksTabImages/sidebar.png" alt="" />
            </div>
            <div className={styles.leftbar}>
            </div>
        </>
    );
};
