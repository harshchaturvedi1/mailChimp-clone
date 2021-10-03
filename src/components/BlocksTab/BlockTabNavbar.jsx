import styles from "./BlockTabNavbar.module.css";
export const Navbar = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.logoDiv}>
                <svg
                    width="38"
                    height="40"
                    viewBox="0 0 38 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4303 26.62C10.3503 26.8 10.0503 27.04 9.63032 27.02C9.19032 26.99 8.70032 26.67 8.63032 25.87C8.61032 25.48 8.75032 25 8.85032 24.75C8.92068 24.5722 8.94114 24.3785 8.9095 24.19C8.87786 24.0014 8.79533 23.825 8.67079 23.6799C8.54626 23.5348 8.38446 23.4264 8.20286 23.3665C8.02126 23.3066 7.82675 23.2974 7.64032 23.34C7.36032 23.4 7.12032 23.56 6.97032 23.8C6.84887 24.0058 6.75792 24.2281 6.70032 24.46C6.60032 24.71 6.46032 24.78 6.36032 24.76C6.31032 24.76 6.25032 24.73 6.21032 24.61C6.09032 24.31 6.18032 23.41 6.77032 22.76C7.14032 22.35 7.73032 22.14 8.30032 22.21C8.89032 22.28 9.38032 22.64 9.68032 23.22C10.0803 23.99 9.72032 24.79 9.51032 25.27L9.45032 25.42C9.31032 25.73 9.31032 26.02 9.43032 26.2C9.53032 26.34 9.69032 26.43 9.88032 26.43C9.98032 26.43 10.0603 26.41 10.1303 26.4C10.2303 26.37 10.3403 26.35 10.4103 26.43C10.4303 26.46 10.4703 26.52 10.4303 26.63V26.62ZM36.8603 24.63C37.2203 25.07 37.6403 25.85 37.6403 27.08C37.5816 28.462 37.2908 29.8244 36.7803 31.11C35.6524 33.8583 33.6719 36.1718 31.1303 37.71C28.6503 39.21 25.6303 40 22.4303 40H21.8303C18.7103 39.9 15.7603 39.02 13.3003 37.46C11.0357 36.0299 9.20614 34.0066 8.01032 31.61C6.63274 31.3935 5.3475 30.7821 4.31032 29.85C3.00912 28.7318 2.17716 27.1643 1.98032 25.46C1.89032 24.6 1.94032 23.77 2.12032 22.99L1.55032 22.5C1.0918 22.0981 0.719747 21.6072 0.456737 21.0571C0.193727 20.507 0.0452494 19.9092 0.0203186 19.3C-0.0278973 18.0364 0.186625 16.7765 0.650319 15.6C1.82032 12.4 4.50032 8.57 7.83032 5.38C9.31131 3.9311 10.9557 2.65924 12.7303 1.59C14.5603 0.54 16.2303 0 17.6703 0C18.8803 0 19.9303 0.37 20.7703 1.1L22.1103 2.42L22.3503 2.32C23.9988 1.59913 25.7716 1.20518 27.5703 1.16C30.9003 1.16 33.0603 2.96 33.0703 5.74C33.0703 7.46 32.2303 9.38 30.6803 11.24C31.0803 11.86 31.4003 12.58 31.6203 13.37C31.9203 14.32 31.9603 15.27 31.9803 15.73C32.0003 16.07 32.0103 16.63 32.0203 17.11C33.0403 17.42 34.3203 17.94 35.0903 18.76C35.6734 19.3585 36.0582 20.122 36.1924 20.9467C36.3266 21.7715 36.2037 22.6175 35.8403 23.37C35.9095 23.558 35.9729 23.7481 36.0303 23.94C36.3303 24.11 36.6303 24.34 36.8603 24.64V24.63ZM35.5803 30.61C35.7203 30.24 36.3303 28.56 36.3303 27.08C36.3303 25.59 35.4903 24.98 34.9603 24.98L34.7003 24.06C34.5503 23.59 34.4003 23.26 34.4003 23.26C34.9803 22.39 35.0003 21.61 34.9103 21.16C34.8259 20.591 34.5592 20.0647 34.1503 19.66C33.3686 18.9929 32.4343 18.5292 31.4303 18.31L30.7403 18.11L30.6703 15.79C30.6594 15.0966 30.5585 14.4075 30.3703 13.74C30.1348 12.7858 29.6479 11.9122 28.9603 11.21C30.6803 9.41 31.7603 7.44 31.7603 5.74C31.7503 2.48 27.7603 1.49 22.8603 3.54L21.8103 3.98L19.9103 2.1C14.3003 -2.8 -3.19968 16.75 2.40032 21.5L3.62032 22.54C3.2887 23.4337 3.17222 24.3929 3.28032 25.34C3.44681 26.7088 4.12136 27.9651 5.17032 28.86C6.18394 29.7874 7.49704 30.3197 8.87032 30.36C11.0503 35.41 16.0303 38.5 21.8703 38.68C28.1203 38.86 33.3703 35.91 35.5703 30.61H35.5803ZM8.42032 20.76C9.55032 20.82 11.2203 21.69 11.6003 24.16C11.9403 26.36 11.4003 28.59 9.36032 28.94C9.16906 28.9754 8.97482 28.9922 8.78032 28.99C6.88032 28.93 4.85032 27.22 4.64032 25.19C4.42032 22.95 5.56032 21.23 7.58032 20.82C7.82032 20.77 8.11032 20.74 8.42032 20.76ZM34.7003 26.19C34.9603 26.35 35.1603 26.69 35.0303 27.58C34.7503 29.23 34.0503 30.58 32.8803 31.81C32.1465 32.6094 31.272 33.267 30.3003 33.75C29.7703 34.03 29.2003 34.27 28.6103 34.47C24.1803 35.92 19.6403 34.32 18.1803 30.89C17.6648 29.647 17.5105 28.2838 17.7352 26.9571C17.9598 25.6304 18.5543 24.3939 19.4503 23.39V23.38C19.5503 23.28 19.6503 23.14 19.6503 22.98C19.6503 22.85 19.5703 22.7 19.4903 22.6C18.9103 21.76 16.9103 20.32 17.3103 17.54C17.6003 15.54 19.3403 14.13 20.9603 14.21C21.1003 14.21 21.2403 14.23 21.3703 14.24C22.0703 14.28 22.6903 14.37 23.2703 14.39C24.2303 14.43 25.1103 14.29 26.1403 13.43C26.4903 13.13 26.7603 12.88 27.2403 12.8C27.2903 12.8 27.4103 12.75 27.6603 12.76C27.9103 12.78 28.1503 12.85 28.3603 12.99C29.1903 13.54 29.3103 14.89 29.3503 15.86L29.4603 18.16C29.5203 19.06 29.7503 19.18 30.2203 19.33C30.4803 19.43 30.7203 19.49 31.0903 19.59C32.1903 19.89 32.8303 20.21 33.2403 20.61C33.4903 20.87 33.6003 21.13 33.6403 21.39C33.7603 22.33 32.9003 23.5 30.6303 24.57C28.0149 25.7217 25.128 26.1134 22.3003 25.7C20.6303 25.48 19.6803 27.65 20.6803 29.13C21.3303 30.09 23.0803 30.71 24.8503 30.71C28.8803 30.71 31.9803 28.98 33.1303 27.49L33.2303 27.35C33.2803 27.27 33.2303 27.22 33.1603 27.27C32.2203 27.92 28.0403 30.49 23.5603 29.72C23.5603 29.72 23.0203 29.62 22.5203 29.43C22.1203 29.28 21.3003 28.9 21.2003 28.04C24.8103 29.17 27.0903 28.11 27.0903 28.11C27.1122 28.0994 27.1299 28.0819 27.1407 28.0602C27.1516 28.0385 27.155 28.0138 27.1503 27.99C27.1491 27.9768 27.1452 27.9641 27.139 27.9524C27.1328 27.9407 27.1243 27.9304 27.1141 27.9221C27.1039 27.9137 27.0921 27.9074 27.0794 27.9036C27.0667 27.8999 27.0535 27.8986 27.0403 27.9C27.0403 27.9 24.0803 28.34 21.2803 27.31C21.5803 26.31 22.3903 26.68 23.6203 26.78C25.8203 26.91 27.8003 26.58 29.2703 26.16C30.7946 25.7216 32.2251 25.0064 33.4903 24.05C33.9203 25.01 34.0803 26.07 34.0803 26.07C34.0803 26.07 34.4203 26.01 34.7003 26.19ZM20.0503 19.76C20.2503 19.78 20.9603 19.42 21.7903 19.36C22.3703 19.33 22.8503 19.51 23.2203 19.68C23.5903 19.84 23.8203 19.95 23.9003 19.85C23.9603 19.8 23.9403 19.68 23.8503 19.54C23.6703 19.24 23.3003 18.94 22.9003 18.76C22.4861 18.5883 22.0346 18.5266 21.5895 18.5809C21.1445 18.6352 20.721 18.8037 20.3603 19.07C20.1103 19.25 19.8803 19.51 19.9103 19.66C19.9203 19.71 19.9603 19.75 20.0503 19.76ZM23.7503 20.68C23.7603 20.65 23.7803 20.6 23.7303 20.52C23.6303 20.34 23.1303 20.02 22.4703 20.1C21.9903 20.18 21.7203 20.34 21.5503 20.49C21.4103 20.62 21.3203 20.76 21.3203 20.86C21.3203 20.91 21.3403 20.93 21.3603 20.95C21.3803 20.97 21.4003 20.98 21.4303 20.98C21.5403 20.98 21.7903 20.88 21.7903 20.88C22.2844 20.6934 22.8185 20.6382 23.3403 20.72C23.5803 20.74 23.6903 20.76 23.7403 20.68H23.7503ZM25.7703 20.94C25.6603 21.18 25.8303 21.51 26.1503 21.67C26.4803 21.83 26.8503 21.77 26.9503 21.53C27.0803 21.29 26.9103 20.96 26.5803 20.8C26.2503 20.64 25.8903 20.7 25.7803 20.94H25.7703ZM27.5103 16.16C26.9903 16.25 26.9703 16.89 27.1603 17.78C27.2603 18.28 27.4503 18.71 27.6603 18.98C27.9203 18.94 28.1803 18.94 28.4203 18.98C28.5603 18.66 28.5903 18.11 28.4603 17.51C28.2803 16.61 28.0303 16.08 27.5103 16.16ZM28.7303 20.5C28.7303 20.13 28.5303 19.83 28.2603 19.82C27.9903 19.82 27.7703 20.12 27.7603 20.48C27.7603 20.85 27.9603 21.15 28.2403 21.15C28.5003 21.15 28.7203 20.86 28.7303 20.5ZM25.6803 9.67C23.7697 9.25016 21.7925 9.2325 19.8747 9.61813C17.9568 10.0038 16.1402 10.7843 14.5403 11.91C14.4803 11.95 14.4103 11.87 14.4503 11.81C15.7489 10.2715 17.3181 8.98359 19.0803 8.01C19.1303 7.98 19.1803 8.04 19.1603 8.09C19.0403 8.31 18.8003 8.79 18.7303 9.15C18.7203 9.2 18.7803 9.25 18.8303 9.21C20.0468 8.4077 21.4402 7.91348 22.8903 7.77C22.9503 7.77 22.9803 7.85 22.9303 7.89C22.7103 8.06 22.4703 8.29 22.2903 8.53C22.2603 8.57 22.2903 8.63 22.3403 8.63C23.3603 8.63 24.8003 9 25.7403 9.53C25.8003 9.56 25.7503 9.68 25.6803 9.67ZM20.5003 4.67C20.5003 4.67 17.6703 6.25 15.0503 8.45C11.5203 11.18 8.85032 15.16 7.25032 19.48C6.02176 19.7094 4.93114 20.409 4.21032 21.43C3.81032 21.09 3.05032 20.43 2.91032 20.17C1.83032 18.11 4.09032 14.1 5.67032 11.83C9.57032 6.23 15.7003 2 18.5203 2.76C18.9803 2.9 20.5003 4.67 20.5003 4.67Z"
                        fill="white"
                    />
                </svg>

                <p>Untitled Template</p>
            </div>
            <div className={styles.navigationDiv}>
                <p>Help</p>
                <p>
                    Preview and test
                    <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.7"
                            d="M2.49922 0.399902L6.99922 4.8999L11.4992 0.399902L13.2992 1.2999L6.99922 7.5999L0.699219 1.2999L2.49922 0.399902Z"
                            fill="#D3D2D0"
                        />
                    </svg>
                </p>
                <p className={styles.Button}>Continue</p>
            </div>
        </div>
    );
};