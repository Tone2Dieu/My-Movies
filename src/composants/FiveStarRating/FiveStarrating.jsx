import l from './FvStRt.module.css'
import { StarFill, Star as StarEmpty, StarHalf } from 'react-bootstrap-icons'



export function FiveStarRating({rating}){
    const starlist = []

    const countStarFill = Math.floor(rating)
    const hasStarHalf = rating - countStarFill > 0.5
    const countStarEmpty = 5 - countStarFill + (hasStarHalf ? 1 : 0)

    for(let i=1; i<=countStarFill; i++){
        starlist.push(<StarFill key={"star-fill"+i} />)
    }

    if(hasStarHalf){
        starlist.push(<StarHalf key={"star-half"} />)

    }

    for(let i=1; i<=countStarEmpty; i++){
        starlist.push(<StarEmpty key={"start-empty"+i} />)
    }

    return(
        <div>
          {starlist}
        </div>
    )
}