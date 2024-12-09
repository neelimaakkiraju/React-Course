import ItemsList from "./ItemsList";


const ResCategory = ({data}) => {

console.log(data)
    return <div className="bg-gray-100 shadow-xl rounded-md">
    <div className="m-4 px-5 flex justify-between ">
    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
    <span>⬇️</span>
    </div>
    <div><ItemsList items={data.itemCards}/></div>
    </div>
}

export default ResCategory;