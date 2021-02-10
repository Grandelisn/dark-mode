import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (initialValue) => {
    const [toggle, setToggle] = useLocalStorage('darkmode',initialValue)

    useEffect( ()=> {
        if(toggle===true){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    },[toggle])

    return [toggle, setToggle];
}