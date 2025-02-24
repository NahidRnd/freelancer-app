import { useSearchParams } from "react-router-dom";

function Filter({filterField, options}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value;//options[0] first index -> ALL
    function handleClick(value){
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    }
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 p-1 border border-gray-300 rounded-md">
        {
            options.map(item => {   
                const isActive = item.value === currentFilter;                                              
                return <button onClick={()=> handleClick(item.value)} disabled={isActive} key={item.value} className={`whitespace-nowrap rounded-md bg-bgG px-4 py-1 transition-all duration-300 ${isActive? "bg-primary":"bg-bgG"}`}>{item.label}</button>
            })
        }
      </div>
    </div>
  )
}

export default Filter
