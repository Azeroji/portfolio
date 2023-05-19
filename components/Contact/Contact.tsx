import React from 'react'

import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div id='Contact' className='flex justify-center py-[7%]'>
      <div className='w-[85%] md:w-[60%] font-FiraCode flex flex-col gap-y-[20px] text-GRAY'>

        <div className='flex items-center justify-center gap-x-[20px] md:w-[100%]'>
            <div className='border-t w-[50%] md:w-[30%] border-[#233554]'></div>
                <p className='font-Poppins font-semibold text-white text-[20px] md:text-[28px] text-center'>Contact me</p>
            <div className='border-t w-[50%] md:w-[30%] border-[#233554]'></div>
        </div>

        <div className='flex flex-col gap-y-[40px] mt-[10%]'>
            <a href="https://github.com/Azeroji" className='hover:text-TXT flex gap-x-[20px] items-center'>
                <FiGithub size={24}/>
                <p className='text-[16px]'>Azeroji</p>
            </a>
            <a href="https://www.linkedin.com/in/dalil-adimi-632967264/" className='hover:text-TXT flex gap-x-[20px] items-center'>
                <FiLinkedin size={24}/>
                <p className='text-[16px]'>Dalil ADIMI</p>
            </a>
            <a href="#" className='hover:text-TXT flex gap-x-[20px] items-center'>
                <FiMail size={24}/>
                <p className='text-[16px]'>md_adimi@esi.dz</p>
            </a>
        </div>

      </div>
    </div>
  )
}

export default Contact