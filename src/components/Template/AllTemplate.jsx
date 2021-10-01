import styles from "./Template.module.css"

export default function AllTemplates({data}){
    
    return (
        <>
         {data.map((el)=>{
             return(
                <div className={styles.template}>
                  <img src={`/images/${el.img}`} alt=""/>
                  <p>{el.p1}</p>
                  <p>{el.p2}</p>
                </div>
             )
         })}
        </>
    )
        
    
}