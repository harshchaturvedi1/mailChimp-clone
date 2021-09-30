import style from './CompletedCampaign.module.css'

export default function CompletedCampaign() {
    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <div className={style.top}>
                    <span className={style.completed}>Completed</span>
                    <span className={style.campaign}>Campaign</span>
                    <span className={style.date}>• Oct 03</span>
                </div>

                <div className={style.campaignName}>Campaign Name</div>
                <div className={style.email}>Email</div>
                <div className={style.clicks}>Clicks <span>33.33% • </span> Opens <span>33.33%</span> </div>
            </div>
            <div className={style.right}>
                <div className={style.rightHead}>Campaign Name</div>
                <div></div>
            </div>
        </div>
    )
}