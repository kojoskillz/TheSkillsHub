import React from 'react'

const Footer = () => {
  return (

    
    <div className='bg-black'>
  
  <div>
      <hr  className='bg-gray-700/20 h-1'/>
  </div>
    
 <div className='flex footer'>
 <div className='grid '>
    <h1 className='lawn_color word2'> TheSkillsHub</h1>
      <p className='text-gray-200/90 font-bold text-xl -mt-12 footerX'>Helping you become a skilled coder. <br />Building better career in tech. </p>
  
 </div>
  {/* Quick_Links */}
<div className='mt-20 ml-60 footerY'>
     <h1 className='text-white font-bold   text-2xl  '>
        Quick Links
     </h1>
      <ul className='text-white font-semibold text-xl '>
           <li><a href="#Home"></a>Home</li>        
           <li><a href="#Course"></a>Course</li>        
           <li><a href="#Contact"></a>Contact</li>                
      </ul>

</div>
{/* contacts */}
<div className='mt-20 ml-60 footerZ '>
     <h1 className='text-white font-bold   text-2xl  '>
        Contact
     </h1>
      <ul className='text-white font-semibold text-xl '>
            <li><a href=""></a>+233541833813</li>
            <li><a href=""></a>+917371071935</li>
            <li><a href=""></a>Email:theskillshub@gmail.com</li>
      </ul>

</div>

 </div>

  <div>
      <h1 className='text-white text-center text-lg pt-20 pb-5 '>
        &copy; 2024 All Rights Reserved. - TheSkillsHub
      </h1>
  </div> 

  {/* footer ends */}
    </div>
  )
}

export default Footer
