const ResCategory = ({data}) => {

console.log(data)
    return <div className="">
    <div className="bg-gray-200 p-2 flex flex-row gap-3 justify-between rounded-md shadow-xl">
    <span >{data.title} ({data.itemCards.length})</span>
    <span>⬇️</span>
    </div>
    </div>
}

export default ResCategory;