import React from 'react'
import coin from "../images/coin.png"
import "../pages/Home.css";
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
   <div className=' overflow-hidden h-[100px]  flex items-center justify-around'>
    <div className='flex items-center'>
      <div>
        
      </div>
          <img src={coin} className='w-[100px] h-[70px]' />
          <h1 className='font-bold text-[20px]'>NEXA COIN</h1>
      
    </div>
          <div>
          <a className='mr-8 text-[18px]'>Home</a>
          <a className='mr-8 text-[18px]'>About</a>
          <a className='mr-8 text-[18px]'>Advantages</a>
          <a className='mr-8 text-[18px]'>Tokenomics</a>
          <a className='mr-8 text-[18px]'>Roadmap</a>
          <a className='mr-8 text-[18px]'>Whitepaper</a>
          <button className='login p-1 px-3 rounded-xl'>Login</button>
          {/* <a className='mr-8 text-[18px]'>Login</a> */}
          </div>
          {/* <Link to="/about" >About</Link> */}
          {/* <Link to="/" >Advantages</Link>
          <Link to="/" >Tokenomics</Link>    
          <Link to="/" >Roadmap</Link>
          <Link to="/" >Whitepaper</Link>
          <Link to="/" >Login</Link> */}
   </div>
    </>
  )
}

export default Navbar