import { motion } from 'framer-motion'
import React from 'react'
 

function Marquee() {
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-[35vw] py-10   bg-[#00342b] rounded-t-4xl mt-10'>
       
        <div className="text border border-l-0 border-r-0 border-[#4d837c] flex whitespace-nowrap  overflow-hidden h-[18vw]  mt-24">
      <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[22vw] leading-none font-founders font-extrabold uppercase mt-[-14px] pr-20'>we create designs</motion.h1> 
      <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}}  className='text-[22vw] leading-none font-founders font-extrabold uppercase  mt-[-14px] pr-24'>we create designs</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
