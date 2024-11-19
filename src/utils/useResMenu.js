import { useState, useEffect} from 'react';
import { API_URL } from "../utils/constants";


const useResMenu = (id)=> {
    const [resData, setResData] = useState(null)
     useEffect(()=> {
        fetchData()
     },[])

    const fetchData = async()=> {
        const data = await fetch(API_URL + id)
        const json = await data.json()
        setResData(json.data)

    }
    return resData;
}
export default useResMenu;