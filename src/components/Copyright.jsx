import React from 'react'

const Copyright = () => {
  return (
    <div className='lg:py-5 py-2 px-2 bg-blue-600'>
      <div className="container mx-auto">
            <div className="lg:flex justify-between">
                <h3 className='font-sans lg:text-[18px] text-[16px] text-white'>2022 © All rights reserved by devsnest-llc</h3>
                <div className="flex lg:gap-x-5 gap-x-3 items-center">
                    <h4 className='text-white font-sans lg:text-[18px] text-[16px] pr-5 border-r-2 border-white'>Privacy Policy</h4>
                    <h4 className='text-white font-sans lg:text-[18px] text-[16px] '>Terms & Conditions</h4>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Copyright
