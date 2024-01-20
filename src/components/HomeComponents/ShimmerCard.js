import React from 'react'

const ShimmerCard = () => {
  return (
    <div class="w-[30%]">
        
        <div class="animate-pulse">

            <div class="rounded-xl bg-[rgba(255,255,255,0.1)] w-[100%] h-[225px]"></div>
            <div className='mt-3'>
                <div className='w-full rounded-lg py-4 bg-[rgba(255,255,255,0.1)]'></div>
                <div className='w-[50%] mt-3 rounded-lg py-4 bg-[rgba(255,255,255,0.1)]'></div>
            </div>

        </div>
    </div>
  )
}

export default ShimmerCard