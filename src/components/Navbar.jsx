import React from 'react'

function Navbar() {
  return (
    <div className="w-full z-[999] px-20 py-8 font-['Neue Montreal'] flex items-center justify-between font-semibold">
        <div className='Logo'><h1>Logo</h1></div>
        <div className="links flex gap-10 font-semibold">
            {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) =>(
             <a key={index} className={`text-lg capitalize   ${index === 4 && "ml-32"} `}>{item}</a> 
             ))}
        </div>
      
    </div>
  )
}

export default Navbar
