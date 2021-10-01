import style from "./LeftBar.module.css"

export default function LeftBar() {

  return (
    <div className={style.main}>

      <div className={style.top}>
        <div className={style.logo}>
          <img src="./BlocksTabImages/leftLogo.png" alt="Logo" />
        </div>
        <div contentEditable={true} className={style.header}>Showcase your products.</div>
      </div>


      <div className={style.body}>
        <div className={style.mainImg}><img src="./BlocksTabImages/mainImg.png" alt="Logo" /></div>
        <div contentEditable={true} className={style.feature}>Feature the star of your collection first.</div>
        <div contentEditable={true} className={style.text}>Then, describe what makes your product unique, useful, or gift worthy. Be sure
          to highlight the main features, and let people know where it’s available.</div>

        <div className={style.button}> <span>Start Shopping</span> </div>
      </div>

      <div className={style.footer}>
        <img src="./BlocksTabImages/footer.png" alt="Logo" /></div>
    </div>
  )
}