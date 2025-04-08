import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full   h-screen pt-1'>
      <div className="textstructure mt-52 px-20  ">
        {["we create ", "eye-opening"," presentations " ].map((item,index)=>{
          return(
            <div className="masker      ">  
             <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1 ], duration: 1}} className="mr-[1vw]  w-[9vw] top-[-7px]  rounded-md h-[5.7vw] relative bg-zinc-600 animate-pulse">
                </motion.div>
              )}
              <h1 className='pt-[2vw]  mb-[0.5vw] uppercase text-[8vw] font-bold leading-[104px] font-founders tracking-[-2.8px] '> {item}</h1>
             </div>
        
        </div>
          )
        })}
        
        </div>


      <div className="  w-full   mt-20 border-b-[1px] border-l-0 border-r-0 border-zinc-800 border flex justify-between items-center py-7 px-20"> 
        {["For public and private companies", "From the first page to IPO",].map((item, index )=>(
          <p className='text-2xl font-medium tracking-tight leading-none'>{item}</p>) )}

      <div className="start flex items-center gap-5  flex-row ">
        <div className="px-5 py-2 border-[1px]  border-zinc-500 rounded-full font-medium text-xl uppercase flex items-center ">Start the project</div>

        <div className="w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-zinc-500">
          <span className='rotate-[45deg]'><FaArrowUpLong /></span>
          </div>
        

      </div>
      </div>
    </div>
  )
}

export default LandingPage



