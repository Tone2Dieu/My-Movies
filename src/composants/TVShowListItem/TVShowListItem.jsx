import l from './TVShLstItm.module.css'
import { SMALL_IMG_BASE_URl } from '../../config'



export function TVShowlistItem({tvShow, onClick}){

    return(
        <div className={l.container}
            onClick={()=>onClick(tvShow)}
        >
            <img src={`${SMALL_IMG_BASE_URl}${tvShow.backdrop_path}`} alt={tvShow.name}  className={l.img} />
            <div className={l.title}>
                {tvShow.name}
            </div>
        </div>
    )
}