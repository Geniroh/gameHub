import React from 'react'
import SearchBar from './SearchBar';
import AuthMenuTop from './AuthMenuTop';

const MyHeader = () => {
  return (
    <nav className='w-[100%] bg-[#090B22] text-white py-4 px-3 flex justify-between items-center sticky top-0'>
      <h1>GameHUB</h1>
      <div>
        <SearchBar />
      </div>
      <div>
        <AuthMenuTop />
      </div>
    </nav>
  )
}

export default MyHeader