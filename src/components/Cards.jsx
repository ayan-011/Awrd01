import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-300  flex items-center px-32 gap-5'>

        <div className="cardcontainer w-1/2 h-[50vh] relative">
        <div className="card w-full h-full bg-[#004d43]   rounded-xl shadow-black shadow-2xl ">
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-2xl'>&copy; 2019</button>
        </div>
        </div>
      
        <div className="cardcontainer w-1/2  h-[50vh]  flex gap-5">
        <div className="card  relative w-1/2 h-full bg-[#212121] rounded-xl ">
         <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-2xl  '>&copy; 2019</button></div>
        <div className="card relative  w-1/2 h-full bg-[#212121] rounded-xl">
         <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-2xl ' >&copy; 2019</button></div>
        </div>
      
    </div>
  )
}

export default Cards
