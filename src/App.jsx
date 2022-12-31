import './global.css'
import l from './app.module.css'
import { TVShowRequest } from './api/TVShowRequest'
import { useState, useEffect } from 'react'
import { BACKDROP_BASE_URL } from './config'
import logo from './assets/images/logo.png'

import { TVShowDeatil } from './composants/TVShowDetail/TVShowDetail'
import { TVShowList } from './composants/TVShowList/TVShowList'
import { Logo } from './composants/Logo/Logo'
import { SearchBar } from './composants/SearchBar/SearchBar'




export function App(){

    const [currentTVShow, setCurrentTVShow] = useState()
    const [recommendationsList, setRecommendations] = useState([]) 


    async function fetchPopular(){
        const popular = await TVShowRequest.fetchPopulars()
        if(popular.length>0){
            setCurrentTVShow(popular[0])
        }
    }

    async function fetchRecommendations(tvShowId){
        const recommendations = await TVShowRequest.fetchrecommendations(tvShowId)
        if(recommendations.length>=0){
            setRecommendations(recommendations.slice(0, 10))
        }
    }

    async function onSearchBar(tvShoName){
        const title = await TVShowRequest.fetchtitle(tvShoName)

        if(title.length>0){
            setCurrentTVShow(title[0])
        }

    }

    useEffect(() => {
      fetchPopular()

    }, [])

    useEffect(()=>{
       if(currentTVShow){
        fetchRecommendations(currentTVShow.id)
       }
    }, [currentTVShow])

   
    
    
    return(
        <div className={l.main_container}
        style={{
            background: currentTVShow ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
            url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path} ") no-repeat center/cover` : "black",
        }}
        >
            <div className={l.header}>
                <div className="row">
                    <div className="col-4">
                      <Logo image={logo} title={"Letrone"} subtitle={"you make also a like"} />
                    </div>
                    <div className="col-sm-12 col-lg-4">

                        <SearchBar onSubmit={onSearchBar}/>

                    </div>
                </div>
            </div>
            <div className={l.tv_show_detail}>
                {currentTVShow && <TVShowDeatil tvShow={currentTVShow} />}
            </div>
            <div className={l.recommendations}>
                {recommendationsList && recommendationsList.length > 0 &&
                 <TVShowList tvShowItem={recommendationsList} onClickItem={setCurrentTVShow} 
                  />}
            </div>
           
        </div>
    )
}