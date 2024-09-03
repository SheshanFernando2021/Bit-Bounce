import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './navbar.css'
import {Link} from'react-scroll'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1><span className='white'>Bit</span>Bounce</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to="section1" smooth={true} offset={-100} ><p>Home</p></Link>
                    </li>
                    <li >
                       <Link to="section2" smooth={true}><p>Featured</p></Link>
                    </li>
                    <li>
                    <Link to="section3" smooth={true}><p>Earn</p></Link> 
                    </li>
                    <li>
                       <Link to="section4" smooth={true}><p>Contact</p></Link>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar