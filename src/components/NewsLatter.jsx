import React from 'react'

const NewsLatter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='p-2 lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p className=''>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'> 
            <div className='flex flex-col sm:flex-row items-center justify-between w-full p-2'>
                <input className=' p-3 text-black flex w-full rounded-md ' type="email" placeholder='Enter email '/>
                <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                <p className='pl-2'>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a] cursor-pointer p-2'><u>Privacy Policy.</u></span>
          </p>
            </div>
        </div>
    </div>
  )
}

export default NewsLatter