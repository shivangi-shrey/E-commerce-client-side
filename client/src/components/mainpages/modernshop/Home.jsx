import React from 'react'
import '../../styles/Home.css'

const Home = () => {
  return (
    <div >
      <h1 className='headline'>welcome to our shop</h1>
      <section className="hero">
     <div className="hero-content">
    <h1>Exclusive Summer Collection – 30% Off!</h1>
    <a href="/product" className="cta-button">Shop Now</a>
  </div>
</section>
<section className='women-section'>
<div className='women-content'>
<h1>Women section</h1>
<a href='/product' className='cta-button'>shop now</a>
</div>
</section>
<section className='men-section'>
<div className='men-content'>
<h1>Men section</h1>
<a href='/product' className='cta-button'>shop now</a>
</div>
</section>



    </div>
    
  )
}

export default Home
