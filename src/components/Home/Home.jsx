import React from 'react';
import bgImg from '../Home/Images/img1.png'
import reactImg from '../Home/Images/react.png'
import cssImg from '../Home/Images/css-3.png'
import htmlImg from '../Home/Images/html-5.png'
import githubImg from '../Home/Images/github.png'
import gitImg from '../Home/Images/git.png'
import javascriptImg from '../Home/Images/javascript (1).png'
import tailwindcssImg from '../Home/Images/tailwindcss.png'
import img2 from '../Home/Images/img2.jpg'



const Home = () => {
  return (
    <div className='bg-black '>
{/* section2 */}
       {/* content */}

       <div className='ml-8 flex' data-aos="fade"
                         data-aos-duration="2000">
       <div className=''>

{/* circle design */}
            <div className='mt-10'>
                      <div className='bg-white/5 w-96 h-96 absolute z-1  rounded-full '></div>
                        <div className='bg-white/5 w-72 h-72 absolute z-1 mt-10 rounded-full '></div>
            </div>
                        <h1 className='text-white font-bold mt-24 text-4xl'>
                          Elevate Your Skills, Elevate Your Career. <br /> Join The Tech Revolution With <br /> 
                           <span className='lawn_color text-7xl'>
                               Web Development Training 
                           </span>
                      </h1>
                      <p className='text-white font-medium mt-5 text-xl'   
                         data-aos="fade"
                         data-aos-duration="2000"
            >
                        Connect with a global network of students and start  
                        <br />your coding journey together
                      </p>

                      <button className='btn text-white text-xl p-4 mt-7 rounded-md'>
                          Get Started
                      </button>

            </div>   
             
             {/* image */}
            <div>
              <img src={bgImg} alt="" className='bgImg' />
            </div>

            
    </div>

{/* section2 */}
    <div className='bg-black  w-screen  pb-20 m-auto sec2 '>
         <h1 className=' lawn_color text-center font-bold text-4xl pt-5 '>
             Skills You Will Develop
         </h1>

{/* images for Skills */}
         <div className='grid grid-cols-3 text-white text-center mt-20 w-60  h-60 gap-5 place-content-center m-auto   '>
          
{/* circle design */}
         <div className=' -mt-32 ml-72  absolute'>
                        <div className='bg-white/5 w-96 h-96 absolute z-1  rounded-full '></div>
                        <div className='bg-white/5 w-72 h-72 absolute z-1 mt-10 rounded-full '></div>
            </div>
       <div>
              <img src={htmlImg} alt="" />
              <h3>
                HTML
              </h3>
       </div>
                        
          <div>
              <img src={cssImg} alt="" /> 
              <h3>
                CSS
              </h3>
          </div>                 
       
          <div>
            <img src={javascriptImg} alt="" />  
            <h3>
              Javascript
            </h3>
        </div>
        
       <div>
               <img src={reactImg} alt="" />
               <h3>
                  React
               </h3>
           </div>

        <div>
            <img src={githubImg} alt="" />
            <h3>
              Github
            </h3>
        </div>
          
        <div>
            <img src={gitImg} alt="" />
            <h3>
              Git
            </h3>
        </div>    
        
      
        
        <div>
            <img src={tailwindcssImg} alt="" />
            <h3>
              Tailwindcss
            </h3>
        </div>
        
          
         </div>
    </div>



{/* section3 */}
      <div className='bg-black '>

           <div className='flex '>
                <img src={img2} alt="" className='-ml-40 h-72 img2 ' />
                <div className=' text-white -ml-28 mr-10'>
                    <h2 className='text-white font-bold mb-10 mt-16  text-6xl '>
                      <span className="lawn_color font-extrabold  text-6xl"> Why Choose Us</span>
                    </h2>

                    <ul className='font-thin  text-2xl '>
                        <li> <b><em> Build modern web applications: </em></b> Learn HTML5,CSS3,JavaScript, and frameworks like React</li>
                        <br />
                        <li> <b><em> Develop responsive designs: </em></b> Create mobile-friendly and accessible interfaces using CSS media queries and Tailwindcss</li>
                        <br />
                        <li> <b><em>Improve problem solving skills:</em></b> Develop critical thinking skills through interactive exercises and projects</li>
                        <br />
                        <li> <b><em>Build a professional portfolio:</em></b> Showcase your your skills and projects to potential employees </li>
                    </ul>
                    
                </div>
                
           </div>
      </div>



       </div>
           




  )
}

export default Home
