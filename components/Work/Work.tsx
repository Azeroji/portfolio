import React from 'react'

type Props = {}

const Work = (props: Props) => {
  return (
    <div id='Work' className='flex justify-center py-[5%]'>
      <div className='w-[85%] md:w-[60%] font-FiraCode flex flex-col gap-y-[20px] text-GRAY'>

        <div className='flex items-center justify-center gap-x-[20px] md:w-[100%]'>
          <div className='border-t w-[50%] md:w-[30%] border-[#233554]'></div>
          <p className='font-Poppins font-semibold text-white text-[20px] md:text-[28px] text-center'>Security Credentials</p>
          <div className='border-t w-[50%] md:w-[30%] border-[#233554]'></div>
        </div>

        <p className='text-center'>
          Selected vulnerability findings from responsible disclosure work on YesWeHack.
          Programs and report details are intentionally undisclosed.
        </p>

        <div className='grid gap-[20px] md:grid-cols-3'>
          <div className='p-[30px] bg-[#112240] rounded-[3px] text-center'>
            <p className='text-TXT text-[28px] font-semibold'>RCE</p>
            <p className='text-white font-Poppins font-semibold text-[22px]'>CVSS 10.0</p>
            <p>Remote Code Execution</p>
          </div>

          <div className='p-[30px] bg-[#112240] rounded-[3px] text-center'>
            <p className='text-TXT text-[28px] font-semibold'>SQLi</p>
            <p className='text-white font-Poppins font-semibold text-[22px]'>CVSS 10.0</p>
            <p>SQL Injection</p>
          </div>

          <div className='p-[30px] bg-[#112240] rounded-[3px] text-center'>
            <p className='text-TXT text-[28px] font-semibold'>Path Traversal</p>
            <p className='text-white font-Poppins font-semibold text-[22px]'>CVSS 8.5</p>
            <p>File and directory traversal</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work