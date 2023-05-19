import React from 'react'
import Image from 'next/image'

type Props = {}

const Work = (props: Props) => {
  return (
    <div id='Work' className='flex justify-center py-[5%]'>
      <div className='w-[85%] md:w-[60%] font-FiraCode flex flex-col gap-y-[20px] text-GRAY'>

        <div className='flex items-center justify-center gap-x-[20px] md:w-[100%]'>
          <div className='border-t w-[50%] md:w-[30%] border-[#233554]'></div>
            <p className='font-Poppins font-semibold text-white text-[20px] md:text-[28px] text-center'>Some Things I've Built</p>
          <div className='border-t w-[50%] md:w-[30%] border-[#233554]'></div>
        </div>

          <div>
            
            <div className='my-[50px]'>
                <p className='text-TXT leading-none'>Featured</p>
                <a href="https://github.com/Azeroji/CHAT-APPS" className='font-Poppins font-semibold text-GRAY text-[16px] md:text-[22px]'>Chat App</a>
                <p className='mt-[20px] p-[30px] bg-[#112240] rounded-[3px]'>Built a full stack instantaneous messaging website using <span className='text-TXT'>React</span>, <span className='text-TXT'>Tailwind</span>, <span className='text-TXT'>Node.js</span>, 
                <span className='text-TXT'> Express.js</span> and <span className='text-TXT'>MySQL</span>.</p>
            </div>
            
            <div className='my-[50px] text-right'>
                <p className='text-TXT leading-none mt-[]'>Featured</p>
                <a href="https://github.com/Azeroji/store" className='font-Poppins font-semibold text-GRAY text-[16px] md:text-[22px]'>Online Store</a>
                <p className='mt-[20px] p-[30px] bg-[#112240] rounded-[3px]'>Built a front-end only Online Store using <span className='text-TXT'>React</span> and <span className='text-TXT'>Tailwind</span>.</p>
            </div>

            <div className='my-[50px]'>
                <p className='text-TXT leading-none mt-[]'>Featured</p>
                <a href="https://github.com/Azeroji/netflix" className='font-Poppins font-semibold text-GRAY text-[16px] md:text-[22px]'>Netflix Replica</a>
                <p className='mt-[20px] p-[30px] bg-[#112240] rounded-[3px]'>Built a front-end only Netflix Replica using <span className='text-TXT'>React</span>.</p>
            </div>

          </div>

      </div>
    </div>
  )
}

export default Work