    import React from 'react'
import { FiSearch } from 'react-icons/fi'
    
    const Search = () => {
      return (
        <>
            <input
            type='text'
            className='w-full border border-gray-200 pl-10 text-sm outline-2 p-2 rounded-lg'
            placeholder='Search...'
            />
            <FiSearch
            className='absolute left-3 top-2 w-5 text-gray-400'
            />
        </>
      )
    }
    
    export default Search