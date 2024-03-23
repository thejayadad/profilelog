import ProfileTable from '@/components/profile-table'
import TopNavbar from '@/components/top-navbar'
import React from 'react'

const HomePage = () => {
  return (
    <section className='px-4'>
      <div className='flex flex-col max-w-screen-lg mx-auto min-h-screen'>
        <TopNavbar />
        <ProfileTable />
      </div>
    </section>
  )
}

export default HomePage