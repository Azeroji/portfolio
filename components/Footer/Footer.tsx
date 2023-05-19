import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div id='Footer' className='flex justify-center text-center font-FiraCode text-GRAY pb-[50px] mt-[50px]'>
        <p>Built by me using <span className='text-TXT'>Next.js</span>, <span className='text-TXT'>TypeScript</span> and <span className='text-TXT'>Tailwind</span>.</p>
    </div>
  )
}

export default Footer