import React from 'react'
import coin from "../images/coin.png";
function Footer() {
  return (
   <>
   <div className='w-[100vw] h-[400px] bg-white'>
          <img src={coin} className='h-[70px] w-[70px]' />
          <h1>NEXA COIN</h1>
          <div>
          <a className='mr-8 text-[18px]'>Home</a>
          <a className='mr-8 text-[18px]'>About</a>
          <a className='mr-8 text-[18px]'>Advantages</a>
          <a className='mr-8 text-[18px]'>Tokenomics</a>
          <a className='mr-8 text-[18px]'>Roadmap</a>
          <a className='mr-8 text-[18px]'>Whitepaper</a>
          </div>
   </div>
   </>
  )
}

export default Footer