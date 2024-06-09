import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='mt-8 sm:mt-14 md:mt-20 lg:mt-24 border-b-[1px] border-gray-600 pb-10 md:pb-14'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 sm:mb-8'>Dive into new type of social media with <span className='text-rose-500'>Blog</span><span className='text-emerald-500'>Post</span></h1>
        <p className='text-center mb-8 sm:mb-10 lg:mb-12 text-base md:text-lg '>
        We believe in proactive performance management. Our system continuously monitors website performance, swiftly addressing any potential issues before they impact user experience. This dedication to uptime and performance ensures your blog is always available and running smoothly.
        </p>
        <Link href='/blogs' className='block max-w-[200px] text-center mx-auto text-base sm:text-lg border border-black px-5 py-2 mt-4 rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out'>
          Explore
        </Link>
    </header>
  )
}

export default Header