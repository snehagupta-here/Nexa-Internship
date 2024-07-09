import React from 'react'
import "./Home.css";
import about from "../images/about.png"
import img1 from "../images/img1.jpg"
function Home() {
  return (
    <>
    <div className='bground h-auto w-[100vw] overflow-x-hidden'>
    <div className='text-white text-[60px] font-bold mx-auto text-center h-[70vh] flex flex-col justify-center'>
      <h1>Join the Nexa Revolution</h1>
      <h1>Redefining Cryptocurrency Accessibility</h1> 
      <button className='h-[50px] w-[120px] bg-white border-[2px] border-[purple] mx-auto my-8 rounded-xl text-[purple] text-[16px] font-semibold'>Register</button>
    </div>
    <div className='w-[70%] h-[600px] flex mx-auto  justify-between'>
      <div className='text-white w-[50%]'>
        <h1 className='text-[60px] font-bold '>About <span className='text-[purple]'>Nexa</span> Token</h1>
        <h1 className='text-[17px] mt-2'>Nexa Token is a BEP-20-based digital asset built on the popular Binance Smart Chain (BSC) blockchain. The developers of Nexa Token have designed it to be used as a peer-to-peer payments platform, and they have also integrated it with multiple exchanges, wallets, and payment services to make it better accessible. Nexa Token offers users an efficient, secure, and fast way to transact.</h1>
      </div>
      <div className='w-[30%] h-[500px]  overflow-hidden'>
        <img className='w-[450px] h-[400px] mb-[500px] rounded-[50%]' src={img1} />
      </div>                                                                                                                                                                                                                  
    </div>
    <div className='w-[80%] h-[600px] flex mx-auto  justify-between'>
    <div className='w-[50%] h-[500px] overflow-hidden'>
        <img className='w-[650px] h-[500px] mb-[500px] ' src={about} />
      </div>
      <div className='text-white w-[45%]'>
        <h1 className='text-[55px] font-bold '>Advantage of  <span className='text-[purple]'>Nexa Token</span> </h1>
        <h1 className='text-[17px] mt-2'>Nexa Token has many advantages over other cryptocurrencies when it comes to security; its BEP-20 compatibility allows users to trust their transactions are being processed securely on the blockchain. For example, all transfers are encrypted using advanced cryptographic algorithms, making them extremely difficult to hack or tamper with. Furthermore, the token is powered by the innovative consensus protocol BFT (Byzantine Fault Tolerance), which ensures that all transactions are validated before being added to the blockchain ledger.</h1>
      </div>
     
    </div>
    <div className='w-[80%] h-[1000px] flex mx-auto  justify-between'>
    <div className='w-[50%]'>
        <img className='w-[650px] h-[500px] mb-[500px] ' src={about} />
      </div>
      <div className='text-white w-[50%]'>
        <h1 className='text-[60px] font-bold '>Advantage of  <span className='text-[purple]'>Nexa Token</span> </h1>
        <h1 className='text-[17px] mt-2'>Nexa Token has many advantages over other cryptocurrencies when it comes to security; its BEP-20 compatibility allows users to trust their transactions are being processed securely on the blockchain. For example, all transfers are encrypted using advanced cryptographic algorithms, making them extremely difficult to hack or tamper with. Furthermore, the token is powered by the innovative consensus protocol BFT (Byzantine Fault Tolerance), which ensures that all transactions are validated before being added to the blockchain ledger.</h1>
      </div>
    </div>
    </div>
    </>
  ) 
} 

export default Home