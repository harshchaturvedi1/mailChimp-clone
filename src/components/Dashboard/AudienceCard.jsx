import audienceCard from './AudienceCard.module.css'

export default function AudienceCard({ status }) {
    return (
        <div className={audienceCard.Wrapper}>
            <div className={audienceCard.Top}>
                <div className={audienceCard.totalAudience}>Total Audience</div>
                <div className={audienceCard.addContacts}>Add Contacts</div>
            </div>

            <div className={audienceCard.Body}>
                <div className={audienceCard.BigNum}>{status ? "3" : "0"}</div>
                <div className={audienceCard.Numbers}>{status ? "+3" : "+0"}(<span className={audienceCard.Span}>{status ? "+300%" : "+0%"}</span>) this week</div>
                <div className={audienceCard.Breakdown}>Total Audience Breakdown</div>

                <div className={audienceCard.Campaign}>Campaign Name</div>
                <div className={audienceCard.Numbers}>{status ? "+3" : "+0"}(<span className={audienceCard.Span}>{status ? "+300%" : "+0%"}</span>) this week</div>
            </div>
        </div>
    )
}
