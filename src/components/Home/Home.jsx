import React from 'react';
import reactImg from '../Home/Images/react.png'
import cssImg from '../Home/Images/css-3.png'
import htmlImg from '../Home/Images/html-5.png'
import githubImg from '../Home/Images/github.png'
import gitImg from '../Home/Images/git.png'
import javascriptImg from '../Home/Images/javascript (1).png'
import tailwindcssImg from '../Home/Images/tailwindcss.png'
import img1 from '../Home/Images/img1.jpg'
import img2 from '../Home/Images/img2.jpg'
import imgX from '../Home/Images/seo.png'
import imgY from '../Home/Images/responsive-design.png'
import imgQ from '../Home/Images/problem-solving.png'
import imgZ from '../Home/Images/portfolio.png'
import img3 from '../Home/Images/img3.jpg'
import code1 from '../Home/Images/code (1).png'
import imgI from '../Home/Images/imgI.png'
import kojo from '../Home/Images/kojo.png'
import rahul from '../Home/Images/rahul.png';
import img4 from '../Home/Images/img4.jpg';
import img6 from '../Home/Images/img6.jpg';
import img9 from '../Home/Images/img9.jpeg';
import img10 from '../Home/Images/img10.jpg';
import face1 from '../Home/Images/face1.jpg';
import face2 from '../Home/Images/face2.jpg';
import face3 from '../Home/Images/face3.jpg';


const Home = () => {
  return (
    <div className='bg-black '>
{/* section2 */}
       {/* content */}

       <div className=' text-center' data-aos="fade"
                         data-aos-duration="2000">
       <div className=''>

{/* circle design */}
            <div className='-mt-10'>
                      <div className='bg-white/5 w-96 h-96 absolute z-1  rounded-full '></div>
                        <div className='bg-white/5 w-72 h-72 absolute z-1 mt-10 rounded-full '></div>
            </div>

            {/* content */}
            <div className='text-center mt-52  m-auto mb-64 '>
            <h1 className='text-white font-bold mt-24 text-center text-3xl'>
                          Elevate Your Skills, Elevate Your Career. <br />  Join The Tech Revolution With <br /> 
                           <span className='lawn_color font-extrabold text-7xl word1'>
                               Web Development Training 
                           </span>
                      </h1>
                      <p className='text-white/70 font-medium mt-5 text-2xl'   
                         data-aos="fade"
                         data-aos-duration="2000" >
                        Connect with a global network of students and start  
                        <br />your coding journey together
                      </p>

                      <button className='btn text-white text-xl p-4 mt-7 rounded-md'>
                          Get Started
                      </button>



                <div className='mt-60' data-aos="fade"
                         data-aos-duration="2000">
                          <img src={code1} alt="" className='absolute w-40 h-40 code1 ' />
                          <img src={code1} alt="" className='absolute w-40 h-40 code2 ' />
                      <img src={img3} alt=""  className='m-auto rounded-xl img3  '/>
                </div>
                      

            </div>
              
            </div>   
             
           

            
    </div>

{/* section2 */}
    <div className='bg-black  w-screen  pb-20 m-auto sec2 '>
         <h1 className=' lawn_color text-center font-bold  pt-5 word2' 
                         data-aos="fade"
                         data-aos-duration="2000">
             Skills You Will Develop
         </h1>

{/* images for Skills */}
         <div className='grid grid-cols-3 text-white text-center mt-20 w-60  h-60 gap-5 place-content-center m-auto   '>
          
{/* circle design */}
         <div className=' -mt-32 ml-72  absolute'>
                        <div className='bg-white/5 w-96 h-96 absolute z-1  rounded-full '></div>
                        <div className='bg-white/5 w-72 h-72 absolute z-1 mt-10 rounded-full '></div>
            </div>
       <div   data-aos="zoom-in"
              data-aos-duration="2000">

              <img src={htmlImg} alt="" />
              <h3>
                HTML
              </h3>
       </div>
                        
          <div   data-aos="zoom-in"
                 data-aos-duration="2000">

              <img src={cssImg} alt="" /> 
              <h3>
                CSS
              </h3>
          </div>                 
       
          <div   data-aos="zoom-in"
                 data-aos-duration="2000">
                  
            <img src={javascriptImg} alt="" />  
            <h3>
              Javascript
            </h3>
        </div>
        
       <div   data-aos="zoom-in"
              data-aos-duration="2000">

               <img src={reactImg} alt="" />
               <h3>
                  React
               </h3>
           </div>

        <div   data-aos="zoom-in"
               data-aos-duration="2000">

            <img src={githubImg} alt="" />
            <h3>
              Github
            </h3>
        </div>
          
        <div   data-aos="zoom-in"
               data-aos-duration="2000">

            <img src={gitImg} alt="" />
            <h3>
              Git
            </h3>
        </div>    
        
      
        
        <div   data-aos="zoom-in"
               data-aos-duration="2000">

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
                <img src={img2} alt="" className='-ml-40 h-72 img2'
                         data-aos="zoom-in"
                         data-aos-duration="2500" />
                <div className=' text-white -ml-28 mr-10'>
                    <h2 className='text-white font-bold mb-10 mt-16  text-6xl '>
                      <span className="lawn_color font-extrabold  text-6xl word3"
                         data-aos="fade"
                         data-aos-duration="2000"> Why Choose Us</span>
                    </h2>

                    <ul className='font-thin text-2xl ' 
                         data-aos="fade"
                         data-aos-duration="2000">
                        <div className='flex '>
                          <img src={imgX} alt=""  className='w-10 h-10 mr-5 mt-2'/>  
                          <li> <b><em> Build modern web applications: </em></b> Learn HTML5,CSS3,JavaScript, and frameworks like React</li>
                        </div>                        
                        <br />

                        <div className='flex '>
                             <img src={imgY} alt="" className='w-10 h-10 mr-5 mt-2' />  
                             <li> <b><em> Develop responsive designs: </em></b> Create mobile-friendly and accessible interfaces using CSS media queries and Tailwindcss</li>
                        </div>
                        <br />
                        
                        <div className='flex '>
                            <img src={imgQ} alt="" className='w-10 h-10 mr-5 mt-2' /> 
                            <li> <b><em>Improve problem solving skills:</em></b> Develop critical thinking skills through interactive exercises and projects</li>
                        </div>
                        <br />
                        
                        <div className='flex '>
                            <img src={imgZ} alt="" className='w-10 h-10 mr-5 mt-2'/>
                            <li> <b><em>Build a professional portfolio:</em></b> Showcase your your skills and projects to potential employees </li>
                        </div>
                        
                    </ul>
                    
                </div>
                
           </div>
      </div>

{/* section4 */}

          <div className='pb-20'   data-aos="fade"
                         data-aos-duration="2000">
                <h2 className='lawn_color word3 mt-5 text-center '>
                   Learn Something New <br /> Today 
                </h2>         

                <div className='text-gray-200 text-center text-2xl p-16 font-thin  '   data-aos="fade"
                         data-aos-duration="2000">
                      <p>
                        At TheSkillsHub we dont just teach you coding, but also provide hands-on experience, real-world 
                        applications, and industry insights to make you a well rounded developer.
                      </p>
                      <p>
                        We teach you  how to approach problems in a logical and methodogical way and also how to learn and stay up-to-date
                        with industry trends.
                      </p>
                </div>

{/* containers for image and content */} 
{/* card */}

<div className='ml-10 flex'>

   
<div>
<div className='relative drop-shadow-xl w-64 h-64 grid  containerX overflow-hidden rounded-xl  bg-[#3d3c3d]'>
                            <div className='absolute grid items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]' 
                             data-aos="fade"
                             data-aos-duration="2000"> 
                            <h1  className='text-3xl font-semibold p-3 word5'>
                                  Get in-depth knowledge.
                             </h1>
                             <p className='text-xl p-3 -mt-24 '>
                                Get teamed up with specialist who work and teach coding. Our specialists are complete professionals
                                and dedicated to helping you succeed in the world of coding.
                             </p>
                            </div>
                            <div className='absolute w-64 h-64 bg-white blur-[50px] -left-1/2 -top-1/2'>
                            </div>
                  </div>
                  <div className='relative drop-shadow-xl w-64 h-64  containerX overflow-hidden rounded-xl  bg-[#3d3c3d]'>
                            <div className='absolute grid items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]' 
                             data-aos="fade"
                             data-aos-duration="2000"> 
                            <h1  className='text-3xl font-semibold p-3 word5'>
                                  Get a helpful roadmap.
                             </h1>
                             <p className='text-xl p-3 -mt-24 '>
                                Our structured curriculum will take you from a beginners roadmap to an expert developer.With strong deciation to helping you achieve your career
                                goals.
                             </p>
                            </div>
                            <div className='absolute w-64 h-64 bg-white blur-[50px] -left-1/2 -top-1/2'>
                            </div>
                  </div>
                  <div className='relative drop-shadow-xl w-64 h-64 containerX overflow-hidden rounded-xl  bg-[#3d3c3d]'>
                            <div className='absolute grid items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]' 
                             data-aos="fade"
                             data-aos-duration="2000"> 
                            <h1 className='text-3xl font-semibold p-3  word5'>
                                  Construct a stunning career perspective.
                             </h1>
                             <p className='text-xl p-3 -mt-24 '>
                                You don't have to struggle alone, you've got our assistance and help. We offer the ability to adapt to individual learning styles.

                             </p>
                            </div>
                            <div className='absolute w-64 h-64 bg-white blur-[50px] -left-1/2 -top-1/2'>
                            </div>
                 </div>
              

</div>
                  {/* imageI */}
                 <div    data-aos="fade-left"
                         data-aos-duration="2500">
                     <img src={imgI} alt="" className='imgI'/>
                 </div>


</div>
 
{/* ends */}

                </div>



                <div className='m-auto grid place-content-center mt-32 pb-40'  
                         data-aos="fade"
                         data-aos-duration="2000">
                     <h1 className='word4  text-center'>
                        Meet The Team
                     </h1>
                     <h1 className='word1 lawn_color text-center pb-10'>
                        Meet The Team
                     </h1>  
                      <h1 className='text-white  text-2xl text-center mb-20' data-aos='zoom-in' data-aos-duration='2000'>
                        Meet our dynamic coding instructors,dedicated to helping you achieve  <br /> your programming goal. Our team will help
                        you with one-on-one guidance and regular check-ins.
                      </h1>


{/* profile of team card */}
{/* dev.kojo */}
<div className='m-auto grid place-content-center gap-20'>
     
                     <div className="card" 
                         data-aos="fade"
                         data-aos-duration="2000">
                        <div className="card2">
                          <img src={kojo} alt="" />
                          <h1 className='text-center text-white  font-bold text-4xl mt-5'>Kwadwo E. Nyarko</h1>
                          <p className='text-white font-semibold text-2xl text-center '>Software Engineer</p>
                          <p className='text-white font-semibold text-xl text-center italic'>Co-Founder</p>
                        </div>
                     </div>

{/* dev.rahul */}
                     <div className="card" 
                       data-aos="fade"
                       data-aos-duration="2000">
                        <div className="card2">
                          <img src={rahul} alt="" className='rahul' />
                          <h1 className='text-center text-white  font-bold text-4xl mt-5'>Rahul Dev</h1>
                          <p className='text-white font-semibold text-2xl text-center '>Fullstack Developer</p>
                          <p className='text-white font-semibold text-xl text-center italic'>Co-Founder</p>
                        </div>
                     </div>
</div>
                     
                </div>

<div>
     <h1 className='text-white font-bold text-6xl pb-10 text-center  word1' data-aos="zoom-in" data-aos-duration="1500">
        Achievements
     </h1>

{/* container for Achievements */}
<div className='m-auto text-center pb-20'>

<div className='text-white font-bold '>
      <img src="" alt="" />
      <h2 className='text-5xl lawn_color word2' data-aos="zoom-in" data-aos-duration="1500">
           Students         
      </h2>
      <p className='text-4xl' data-aos="fade-up" data-aos-duration="1500">
         110+
      </p>
</div>
<br />
<br />
<div className='text-white font-bold ' >
      <img src="" alt="" />
      <h2 className='text-5xl lawn_color word2' data-aos="zoom-in" data-aos-duration="1500">
           Awards         
      </h2>
      <p className='text-4xl' data-aos="fade-up" data-aos-duration="1500">
         5+
      </p>
</div>
<br />
<br />
<div className='text-white font-bold '>
      <img src="" alt="" />
      <h2 className='text-5xl lawn_color word2' data-aos="zoom-in" data-aos-duration="1500">
           Projects         
      </h2>
      <p className='text-4xl' data-aos="fade-up" data-aos-duration="1500">
         20+
      </p>
</div>
<br />
<br />
</div>
  
</div>

<div className='pb-16   text-center'>
    <h1 className='text-white text-center text-4xl font-semibold '  data-aos="fade-in" data-aos-duration="2000">
      <span className='lawn_color word2'> Learn By Doing </span> <br /> 
    </h1>

    <div className='flex mt-16 p-20'>
      <div>
          <p className='text-white font-medium text-4xl p-10 mt-10'  data-aos="zoom-in" data-aos-duration="1500">
              With our hands on learning projects you <br /> gain practical experience, practice and skills of real world applications.
          </p>
          <button type="submit" className='bg-[#26D2FC] w-32 p-3 rounded-xl mt-5 text-white font-bold'  data-aos="fade" data-aos-duration="1500">Register</button>

      </div>
        
    {/* images */}
          <div className='rounded-lg grid grid-cols-2 place-content-center'>
              <img src={img4} alt="" className='w-64  h-80 object-cover rounded-2xl learnImg ' data-aos="zoom-in" data-aos-duration="1500"/>
              <img src={img6} alt="" className='w-64  h-80 object-cover rounded-2xl learnImg ' data-aos="zoom-in" data-aos-duration="1250"/>
              <img src={img9} alt="" className='w-64  h-80 object-cover rounded-2xl learnImg ' data-aos="zoom-in" data-aos-duration="1000"/>
          </div>

    </div>

</div>


{/* ends */}


{/* courses */}
<div className='pb-56'>
      <h1 className='text-center word3 lawn_color pb-10 ' data-aos='fade' data-aos-duration='2000' >Programming Course</h1>
      <h3 className='text-white font-semi-bold text-center mb-20 p-5 text-2xl ' data-aos='fade' data-aos-duration='2500'>
         Welcome to our programming course, where you'll unlock the power of code and transform your ideas into reality. This course
         will guide you through the fundamentals of programming, teaching you the skills and concepts needed to succeed in todays tech-driven world. 
         Get ready to learn,create and innovate with code.
      </h3>
{/* container_frontend*/}
<div className='flex place-content-center gap-12   '>
{/* frontend */}
      <div data-aos='zoom-in' data-aos-duration='2000'>      
            <div className='bg-[#6F6DF1] h-96 w-96 border-[#6F6DF1] border-2 rounded-2xl'>
                    <img src={img1} alt=""  className=''/>
                    <h1 className='font-bold text-2xl text-white mt-2 ml-3 '>Front-End Web Developmennt</h1>
                    <p className='font-semi-bold text-xl text-white mt-2 ml-3'> 6 months</p>
                    <p className='font-semi-bold text-xl text-white mt-2 ml-3'>Pricing: $120</p>
            </div>
                  <button type="submit" className='p-3 w-32 m-auto rounded-2xl text-lg border-[#6F6DF1] border-2 mt-8 text-white grid place-content-center'>Register</button>
      </div>
{/* ends */}


{/* backend */}
      <div data-aos='zoom-in' data-aos-duration='2000'>
            <div className='bg-[#6F6DF1] h-96 w-96 border-[#6F6DF1] border-2 rounded-2xl'>
                    <img src={img10} alt=""  className=''/>
                    <h1 className='font-bold text-2xl text-white mt-2 ml-3 '>Back-End Web Developmennt</h1>
                    <p className='font-semi-bold text-xl text-white mt-2 ml-3'>6 months</p>
                    <p className='font-semi-bold text-xl text-white mt-2 ml-3'>Pricing: $150</p>
            </div>
            <button type="submit" className='p-3 w-32 m-auto rounded-2xl text-lg border-[#6F6DF1] border-2 mt-8 text-white grid place-content-center'>Register</button>
      </div>
  {/* ends */}

</div>
  
  {/* students testimonials */}
  <div className='testimonial  w-full bg-[#1A1A1A] rounded-b-3xl mt-32'>
             <h1 className='word3 text-white  text-center pt-5 mb-20' data-aos='zoom-in' data-aos-duration='2000'>What Our Students Say</h1>


{/* containers for testimonials of students */}
<div className='m-auto grid place-content-center  mt-20 ' data-aos='zoom-in-up' data-aos-duration='2000'>
    <img src={face1} alt="" className='rounded-full z-10 -mb-5 border-4 border-slate-200 m-auto w-24 h-24'/>
    <div className='h-80 w-[32rem] bg-slate-200 p-5 rounded-lg'>
        <h1 className='text-3xl text-black font-bold '>FrontEnd Engineer</h1>
        <h2 className='text-2xl text-black font-semibold'>Kofi Johnson</h2>
        <p className='text-gray-500  font-normal   text-xl pt-5 '>
          I'm thrilled to have had the opportunity to learn and grow as a frontend developer
           on TheSkillsHub.The comprehensive resources, and real world projects helped me develop the
           skills i needed to succeed in my career.
        </p>
    </div>
</div>

<div className='m-auto grid place-content-center mt-20' data-aos='zoom-in-up' data-aos-duration='2000'>
    <img src={face2} alt="" className='rounded-full z-10 -mb-5 border-4 border-slate-200 m-auto w-24 h-24'/>
    <div className='h-80 w-[32rem] bg-slate-200 p-5 rounded-lg'>
        <h1 className='text-3xl text-black font-bold '>FrontEnd Engineer</h1>
        <h2 className='text-2xl text-black font-semibold'>Rachael Olamide</h2>
        <p className='text-gray-500  font-normal text-xl pt-5 '>
            Thanks to TheSkillsHub learning platform ive been able to launch a successful career as a frontend developer and worked on projects that
            i love. The platforms emphasis on hands-on-learning  has made me a confident developer.
        </p>
    </div>
</div>

<div className='m-auto grid place-content-center  mt-20 ' data-aos='zoom-in-up' data-aos-duration='2000'>
    <img src={face3} alt="" className='rounded-full z-10 -mb-5 border-4 border-slate-200  m-auto w-24 h-24'/>
    <div className='h-80 w-[32rem] bg-slate-200 p-5 rounded-lg' >
        <h1 className='text-3xl text-black font-bold '>BackEnd Engineer</h1>
        <h2 className='text-2xl text-black font-semibold'>Anika Mahika</h2>
        <p className='text-gray-500  font-normal text-xl pt-5 '>
           The instructors are friendly and competent.I gained an understanding of HTML,CSS, and JavaScript. I was able to
           connect with a lovely community of developers that helped me in my course.
        </p>
    </div>
</div>



  </div>

{/* Frequently_Asked_Questions */}
<div>
{/* FAQ_Content */}
<div>
    <h1 className='text-white word3 mt-20 text-center '> Frequently Asked Questions</h1>
</div>


</div>

</div>


          </div>

  )
}

export default Home
