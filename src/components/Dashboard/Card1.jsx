import './Card1.css'

export default function Card1({ status }) {
    return (
        <img className="imgCard1" src={status ? "./dashboard-images/createwebsite.png" : "./dashboard-images/bake.jpg"} alt="bake" />
    )
}

