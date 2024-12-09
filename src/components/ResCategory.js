import { useState } from "react";
import ItemsList from "./ItemsList";


const ResCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false)

    const onClickHandler = ()=> {
        setShowItems(!showItems)
    }

console.log(data)
    return <div className="shadow-sm rounded-md">
    <div className="m-4 px-5 flex justify-between cursor-pointer" onClick={onClickHandler}>
    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
    <span>⬇️</span>
    </div>
    <div>{showItems && <ItemsList items={data.itemCards}/>}</div>
    </div>
}

export default ResCategory;