import './Card4.css'
import CompletedCampaign from './CompletedCampaign'

export default function Card4({ value }) {

    return (
        <div>
            <div className="card4-top">
                <div className="card4-top-left">Here’s what’s happening </div>
                <div className="card4-top-right">
                    <div>Filter by: <span>All activity</span> <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.9999 0.799988L5.9999 4.79999L9.9999 0.799988L11.5999 1.59999L5.9999 7.19999L0.399902 1.59999L1.9999 0.799988Z" fill="#2C2C2C" />
                    </svg>
                    </div>
                </div>
            </div>

            {value ? <CompletedCampaign /> : <div className="card4-container">


                <div className="card4-header">This section is your feed. Your most important marketing activity will show up here.</div>
                <div className="card4-body">Once your campaign is underway, things will look a lot more exciting.</div>

                <button className="card4-button"><span className="card4-span">Create A Campaign</span></button>
            </div>}

        </div>
    )
}
