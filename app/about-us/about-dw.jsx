import Image from 'next/image'
import React from 'react'

function AboutDw() {
  return (
    <div className='container mx-auto px-5'>
        <div className=''>
            <p className='text-[30px] font-bold py-3'>About DW</p>
            <hr/>
        </div>
        <div className='flex flex-wrap justify-around gap-y-5 my-8'>
            <div className='w-[100%] lg:w-[40%]'>
                <Image src='/img/about/about-us.png' alt='' width={400} height={700} />
            </div>
            <div className='w-[100%] lg:w-[40%] flex justify-evenly flex-col'>
                <div>
                    <p className='text-[18px] font-semibold mb-5'>Our Vision</p>
                    <p>We are trying to form a dynamic and innovative team around the world by collaborating with the professionals who lead the market. Our partners bring unique ideas as they have intense experience in the marketing space. </p>
                </div>
                <div>
                    <p className='text-[18px] font-semibold mb-5'>Our Mission</p>
                    <p>Leading marketing professionals are the ones with whom we can proudly collaborate to form an innovative and dynamic team worldwide.  Our deep-experienced partners bring unique ideas for us in the market space. </p>
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default AboutDw