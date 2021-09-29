import './Card3.css'

export default function Card3({ img, head, body, button }) {

    return (
        <div className="container">
            <img className="card3img" src={img} alt="card_img" />
            <div className="head">{head}</div>
            <div className="body">{body}</div>
            <div className="button">{button}</div>
        </div>
    )
}
