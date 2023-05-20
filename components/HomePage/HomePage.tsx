import React from 'react'
import Link from 'next/link'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='flex justify-center pt-[20%] pb-[35%] md:py-[10%]'>
      <div className='w-[85%] md:w-[60%] flex flex-col gap-y-[20px]'>
        <p className='text-TXT font-FiraCode leading-none'>Hello, my name is</p>
        <p className='text-white font-Poppins font-semibold text-[32px] md:text-[60px] leading-none'>Dalil ADIMI<span className='text-TXT'>.</span></p>
        <p className='text-GRAY font-Poppins font-semibold text-[32px] md:text-[60px] leading-none'>I am a <span className='text-TXT'>Full Stack Web Developer</span>.</p>
        <p className='text-GRAY font-FiraCode w-[60%]'>I've built and conceived multiple web projects both front-only and full stack applications</p>
        <Link href="#Contact" className='text-center hover:text-TXT font-FiraCode border border-TXT px-[15px] py-[8px] hover:bg-BG bg-TXT text-BG rounded-[3px] w-[150px] font-medium mt-[5%]'>Contact me</Link>
      </div>
    </div>
  )
}

export default HomePage