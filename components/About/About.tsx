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
            <p>I practice responsible security research as a bug bounty hunter on <a className='text-TXT hover:underline' href='https://yeswehack.com/hunters/Azerojii#latest-hacktivity'>YesWeHack</a>, where I explore real-world applications and responsibly disclose vulnerabilities.</p>
            <p>My approach is simple: understand how a system works, find where its assumptions fail, and help make it stronger.</p>
          </div>
          <Image className='lg:block hidden' src="/images/about.svg" alt="logo" width="512" height="512"/>
        </div>

      </div>
    </div>
  )
}

export default About