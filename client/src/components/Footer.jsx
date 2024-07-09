import React from 'react'
import coin from "../images/coin.png";
import facebook from "../images/facebook.webp";
import youtube from "../images/youtube.png";
import insta from "../images/insta.jpg";
import twitter from "../images/twitter.png";
import "../pages/Home.css";
function Footer() {
  return (
   <>
   <div className='w-[100vw] h-[400px] footer flex flex-col items-center justify-start bg-[white] ]'>
    <div className='flex items-center my-8'>
          <img src={coin} className='h-[60px] w-[70px]' />
          <h1 className='font-bold text-[17px]'>NEXA COIN</h1>
    </div>
          <div className='mb-8'>
          <a className='mr-8 text-[18px] hover:text-[#93acff]'>Home</a>
          <a className='mr-8 text-[18px] hover:text-[#93acff]'>About</a>
          <a className='mr-8 text-[18px] hover:text-[#93acff]'>Advantages</a>
          <a className='mr-8 text-[18px] hover:text-[#93acff]'>Tokenomics</a>
          <a className='mr-8 text-[18px] hover:text-[#93acff]'>Roadmap</a>
          <a className='mr-8 text-[18px] hover:text-[#93acff]'>Whitepaper</a>
          </div>
          <div className='flex items-center justify-evenly w-[10%] '>
    <img src={facebook} className='w-[50px] h-[50px] mr-2' />
    <img src={youtube} className='w-[40px] h-[40px] mr-3' />
    <img src={insta} className='w-[40px] h-[40px] mr-3' />
    <img src={twitter} className='w-[30px] h-[30px] mr-3' />
          </div>
          <div className='flex w-[50%] justify-between font-semibold text-[17px]'>
            <h1>Privacy Policy</h1>
            <h1>Copyright © Nexa Coin 2024</h1>
          </div>
   </div>
   </>
  )
}

export default Footer