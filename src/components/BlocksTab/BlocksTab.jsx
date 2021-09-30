import styles from "./BlocksTab.module.css";

export const BlocksTab = () => {
    return (
        <>
            {/* header */}
            <div className={styles.navbar}>
                <img src="./BlocksTabImages/navbar.png" alt="" />
            </div>

            {/* leftdiv image */}
            <div className={styles.leftbar}>
                <img src="./BlocksTabImages/sidebar.png" alt="" />
            </div>

            {/* right div */}
            <div className={styles.rightbar}>
            </div>
        </>
    );
};
