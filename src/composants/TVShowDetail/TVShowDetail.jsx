import l from './TVShDt.module.css'
import { FiveStarRating } from '../FiveStarRating/FiveStarrating'



export function TVShowDeatil({tvShow}){
    const rating = tvShow.vote_average/2

    return(
        <div>
            <div className={l.title}> {tvShow.name} </div>
            <div className={l.rating_container}>
                <FiveStarRating rating={rating} />
                <div className={l.rating}> {rating}/5 </div>
            </div>
            <div className={l.overview}> {tvShow.overview} </div>
        </div>
    )
}