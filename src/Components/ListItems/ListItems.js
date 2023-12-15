import ListCard from "./ListCard/ListCard";


const ListItems = ({data})=>{
    let arr = [...data]
    return (
        <div className="py-36 px-4 grid grid-cols-6 gap-3">
            {arr.map((elem)=>(
                <div key={elem?._id}> 
                    <ListCard data={elem}/>
                </div>
            ))}        
        </div>
    )
}


export default ListItems;