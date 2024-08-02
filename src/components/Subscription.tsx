import React from 'react'
import { Search } from 'lucide-react';
export default function Subscription() {
  return (
    <div className='w-full h-56 bg-[#232c3b] shadow-sm'>
        <div className='max-w-6xl mx-auto h-full flex sm:flex-row flex-col items-center justify-center sm:justify-normal'>
            <div className='sm:w-1/3 w-full sm:h-1/4 h-1/3 flex  flex-col items-start justify-start'>
            <h2 className='text-white text-xl sm:text-2xl font-bold'>Scan your Web Application
            </h2>
            <p className='text-gray-400 text-sm ml-2'>OWASP Top10 <span className='text-red-600'> Coming Soon !!!</span></p>
            </div>
            <div className='sm:w-2/3 w-full sm:h-1/4 h-1/4 flex   items-center bg-white rounded-md '>
                <input type='email' placeholder='Enter your domain name' className='bg-white flex-1 outline-none  text-black p-2 ml-2 rounded-md' />
                    <div className='flex justify-end items-center h-full'>
                    <p>.com</p>
                    <button className='bg-red-600 text-white sm:p-4 p-2 h-full rounded-r-md  flex justify-center items-center'><Search className='text-white'/></button>
                    </div>
            </div>
        </div>
      
    </div>
  )
}
