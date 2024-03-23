import React from 'react'
import {FiSearch} from "react-icons/fi"
import CreateProfile from './create-profile-'
import Search from './search-form'

const TopNavbar = () => {
  return (
    <section>
        <div className='flex justify-between gap-6 items-center w-full p-4'>
            <div className='relative flex flex-1 items-center'>
            <Search />
            </div>
            <div>
            <CreateProfile />
            </div>
        </div>
    </section>
  )
}

export default TopNavbar