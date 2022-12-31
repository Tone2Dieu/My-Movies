import l from './lg.module.css'



export function Logo({image, title, subtitle}){
    return(
       <>
        <div className={l.container}>
            <img src={image} alt="" className={l.img} />
            <span className={l.title}> {title} </span>
        </div>
        <span className={l.subtitle}> {subtitle} </span>
       </>
    )
}