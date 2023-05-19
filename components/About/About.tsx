import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <div id='About' className='flex justify-center py-[7%]'>
      <div className='w-[85%] md:w-[60%] font-FiraCode flex flex-col gap-y-[20px] text-GRAY'>

        <div className='flex items-center gap-x-[20px] md:w-[50%]'>
          <p className='font-Poppins font-semibold text-white text-[20px] md:text-[28px]'>About me</p>
          <div className='border-t w-[50%] md:w-[70%] border-[#233554]'></div>
        </div>

        <div className='flex justify-between items-center gap-x-[5%]'> 
          <div className='flex flex-col gap-y-[20px]'>
          <p>Hello! my name is Dalil and I am currently pursuing my studies in Computer Science at the National Higher School of Computer Science in Algiers, Algeria.</p>
          <p>I enjoy the process of web development, from conceiving and designing websites to bringing them to life. Moreover, 
              I have recently ventured into machine learning and data science, exploring the fascinating realms of extracting insights and building intelligent systems.</p>
          <p>Here are some technologies I have been working with recently :</p>
          
          <div className='flex w-[100%] justify-around items-center'>
            <ul className='flex flex-col gap-y-[10px] w-[45%]'>
              <li className='text-TXT border border-TXT px-[15px] py-[8px] rounded-[3px]'>TypeScript</li>
              <li className='text-TXT border border-TXT px-[15px] py-[8px] rounded-[3px]'>Next.js</li>
              <li className='text-TXT border border-TXT px-[15px] py-[8px] rounded-[3px]'>Tailwind css</li>
              <li className='text-TXT border border-TXT px-[15px] py-[8px] rounded-[3px]'>Python</li>
            </ul>
            <ul className='flex flex-col gap-y-[10px] w-[45%]'>
              <li className='text-TXT border border-TXT px-[15px] py-[8px] rounded-[3px]'>JavaScript</li>
              <li className='text-TXT border border-TXT px-[15px] py-[8px] rounded-[3px]'>Node.js</li>
              <li className='text-TXT border border-TXT px-[15px] py-[8px] rounded-[3px]'>Express.js</li>
              <li className='text-TXT border border-TXT px-[15px] py-[8px] rounded-[3px]'>MySQL</li>
            </ul>
          </div>

          </div>
          <Image className='md:block hidden' src="/images/about.svg" alt="logo" width="512" height="512"/>
        </div>

      </div>
    </div>
  )
}

export default About