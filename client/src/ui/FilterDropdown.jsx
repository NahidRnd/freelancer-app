import { useSearchParams } from "react-router-dom"

function FilterDropdown({options, filterField}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const value = searchParams.get(filterField) || "";
    function handleChange(e){
        searchParams.set(filterField, e.target.value);
        setSearchParams(searchParams);
    }
  return (
    <select value={value} onChange={handleChange} className="textField__input py-2 text-xs bg-input-dark">
        {options.map(item => <option key={item.value} value={item.value} className="">{item.label}</option>)}
    </select>
  )
}

export default FilterDropdown
