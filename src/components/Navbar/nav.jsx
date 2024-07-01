import React from 'react'

const nav = () => {
  return (
<div>
   <nav className='flex'>
          {/* logo */}
        <h1 className='bg-orange text-3xl font-extrabold text-white ml-10 nav_logo'>
            TheSkillzHub
        </h1>

         {/* nav_links */}
         <div className='text-white flex text-center '>
              <ul className='flex text-xl gap-4 font-semibold nav nav_text'>
                  <li><a href="#Home"></a>Home</li>
                  <li><a href="#About"></a>About</li>
                  <li><a href="#Courses"></a>Courses</li>
                  <li><a href="#Login"></a>Login</li>
              </ul>
         </div>
         
         
    </nav>

    
</div>



  )
}

export default nav
