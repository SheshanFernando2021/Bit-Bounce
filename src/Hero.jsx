
import React from 'react'
import './hero.css'
import Crypto from '../src/assets/hero-img.png'

const Hero = () => {
    return (
        <div className='hero' id='section1'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Unlock the power of your retirement account - trade crypto around the clock!</p>
                    <h1>Crypto Investment Made Easy<br /> <span className='spans'>Maximize Your IRA with Cryptocurrency Trading</span></h1>
                    <p>Subscribe to Everyday Crypto for the latest updates on cryptocurrency!</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Subscribe !</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
