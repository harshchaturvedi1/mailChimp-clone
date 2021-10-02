import styles from "./Template.module.css";
import {Link} from "react-router-dom";

export default function AllTemplates({data}){
    
    return (
        <>
         {data.map((el)=>{
             return(
                <Link to="/blocktab" className={styles.template} >
                  <img src={`/images/${el.img}`} alt=""/>
                  <p>{el.p1}</p>
                  <p>{el.p2}</p>
                </Link>
             )
         })}
        </>
    )
        
    
}