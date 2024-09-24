import React from 'react'

function Hero() {
    return (
        <main className='hero'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p> YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP 
                  YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH 
                  OUR SHOES.Shop Now Category Also Available On 
                  </p>

                  <div className='hero-btn'>
                    <button className='first-btn'>Shop Now</button>
                    <button className='second-btn'>Catogary</button>
                  </div>

                  <div className='shopping'>
                    <p>Also Available On</p>
                  </div>
                  <div className='brand-icons'>
                     <img src='/Images/amazon.png' alt='amazon' />
                     <img src='/Images/flipkart.png' alt='flipkart'/>
                  </div>
          </div>
          <div className='hero-image'>
            <img src='/Images/shoe_image.png' alt='shoe-image'/>
          </div>

        </main>
    )
}

export default Hero
