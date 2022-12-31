import l from './SkBar.module.css'
import { Search as SearIcon } from 'react-bootstrap-icons'

export function SearchBar({onSubmit}){

    function submit(e){
        if(e.key === "Enter" && e.target.value.trim() !== ""){
            onSubmit(e.target.value)
        }
    }

    return(
        <>
            <SearIcon size={27} className={l.icon} />
            <input className={l.input} type="text" name="" id="" placeholder="search tv show you like " 
            style={{width: "100%"}} onKeyUp={submit} />
        </>
    )
}