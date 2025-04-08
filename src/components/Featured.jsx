import { motion } from 'framer-motion'
import { Power4 } from 'gsap'
import { span } from 'framer-motion/client'
import React, { useState } from 'react'

function Featured() {
  const [isHovering,setHovering] = useState(false)
  
  
 
  return (
    <div className='w-full py-10 overflow-hidden'>
        <div className="w-full px-10  border-b-[1px] pb-20 border-zinc-700  ">
            
        <h1 className='text-7xl tracking-tight  '>Featured projects</h1>
        </div>
        {/* CARDS    */}

        <div className='px-20 '>
        <div className="cards flex gap-10 mt-10   ">

        <div 
         onMouseEnter={ ()=> setHovering(true) }
         onMouseLeave={ ()=> setHovering(false) } 
         className="cardcontainer w-1/2  h-[75vh] relative ">
            <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2  top-1/2 -translate-y-1/2 ' >
            <h1 className='absolute text-[#CDEA68] flex overflow-hidden right-full top-1/2 -translate-x-1/2 -translate-y-1/2    z-[9] text-8xl leading-none tracking-tighter uppercase   w-[700px] text-center font-semibold'> 
            {"fyde".split('').map((item,index)=>
               <motion.span 
                initial={{y: "100%"}} 
                animate={isHovering ? ({y: "0%"}) : ({y: "100%"})}
                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06 }}
                className="inline-block ">
               {item}
               </motion.span>     )}
            </h1>
            </h1>
          <div className="w-full h-full   rounded-xl  overflow-hidden">
            <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
            
          </div>
        </div>

        <div className="cardcontainer w-1/2 h-[75vh] relative  ">
            <div className="w-full h-full bg-green-500 rounded-xl  overflow-hidden">
        <h1 className='absolute flex overflow-hidden  right-full top-1/2  translate-x-1/2 -translate-y-1/2    z-[9] text-8xl leading-none uppercase font-founders text-center font-semibold'> 
        {"VISE".split('').map((item, index)=> 
       <motion.span 
       initial={{y: "100%"}} 
       animate={isHovering ? ({y: "0%"}) : ({y: "100%"})}
       transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06 }}
       className="inline-block ">
      {item}
      </motion.span>
             )}
        </h1>
            <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
            </div>
        </div>

        </div>
        </div>
      
    </div>
  )
}

export default Featured
//249