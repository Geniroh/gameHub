import React from 'react'
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div className='flex items-center rounded-3xl p-3 px-4 bg-white max-w-[400px]'>
        <BsSearch className='text-black mr-3' />
        <input type="text" name="" id="" className=' outline-none focus:outline-none bg-transparent text-black w-full' />
    </div>
  )
}

export default SearchBar