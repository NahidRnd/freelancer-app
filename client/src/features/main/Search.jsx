import { FiSearch } from "react-icons/fi";

function Search({query, setq}) {

    const handleSearch = () => {

    }

  return (
    <div className='flex bg-white border border-border rounded-full my-6 sm:px-1 sm:py-1 px-[2px] py-[2px] max-w-[650px] items-center justify-between'>
        <FiSearch className="text-textT sm:text-3xl text-xl mr-4" />
      <input
       value={query}
       onChange={(e) => setQuery(e.target.value)}
       type="text" name="search" id="search" placeholder='اینجا جستجو کنید...' className='sm:pl-15 sm:flex-grow-1' />
      <button onClick={handleSearch} className="bg-textT text-white sm:p-4 sm:px-14 px-6 p-[10px] text-sm sm:text-lg rounded-full">
        جستجو
      </button>
    </div>
  )
}

export default Search
