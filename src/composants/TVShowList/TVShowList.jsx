import l from './TVShLst.module.css'
import { TVShowlistItem } from '../TVShowListItem/TVShowListItem'



export function TVShowList({tvShowItem, onClickItem}){

    return(
       <>
       <div className={l.title}> you may also a like </div>
       <div className={l.liste}>
            {tvShowItem.map((tvShow)=>{
                return(
                    <span className={l.tv_show_item} key={tvShow.id}  >
                        <TVShowlistItem tvShow={tvShow} onClick={onClickItem}  />
                    </span>
                )
            })}
        </div>
       </>
    )
}