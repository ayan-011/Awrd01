import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2"  className='bg-[#cdea68] w-full py-20 rounded-t-4xl text-black p-40 overflow-hidden'>
      <h1 className='font-founder text-[3vw] leading-[3.7vw] tracking-tight  '>This is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className=" w-full flex gap-10 p-3  pt-10 border border-l-0 border-b-0  border-r-0 border-[#91a549] mt-20">
        <div className="w-1/2 ">

        <h1 className='text-7xl'>Our Approach</h1>
        <button className='px-10 py-6 mt-20 bg-zinc-900 rounded-full text-white text-2xl font-semibold font-founder flex items-center gap-9 uppercase'> Read More
            <div className="w-4 h-4 rounded-full bg-white mt-2"></div>
        </button>
        </div>
        <div className='w-[90vh] h-[60vh] rounded-2xl bg-[#91a549]'></div>
      </div>
    </div>
  )
}

export default About
