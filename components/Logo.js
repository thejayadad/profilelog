import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
    <div className="hover:opacity-75 transition items-center flex">
      <img
          src="/logo.png"
          alt="Logo"
          height={100}
          width={100}
        />
        <p className='text-lg text-neutral-700 pb-1'>
          ThePlayerProfileLog
        </p>
      </div>
    </Link>
  )
}

export default Logo