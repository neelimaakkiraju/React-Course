import ItemsList from "./ItemsList";


const ResCategory = ({data}) => {

console.log(data)
    return <div className="">
    <div className="bg-gray-200 p-2 flex-row  justify-between rounded-md shadow-xl">
    <span >{data.title} ({data.itemCards.length})</span>
    <span>⬇️</span>
    <ItemsList items={data.itemCards}/>
    </div>
   
    
    </div>
}

export default ResCategory;