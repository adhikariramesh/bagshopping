'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import Cart from './Cart';
import { CgMail } from "react-icons/cg";
import { HiOutlineXMark } from "react-icons/hi2";
import { BsTelephoneMinusFill,BsFacebook,BsInstagram } from "react-icons/bs";
import { AiFillLinkedin,
    AiFillGithub,
    AiOutlineSearch,
    AiOutlineShoppingCart,
    AiOutlineMenu
    } from "react-icons/ai";
import Image from 'next/image';


const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const[showCart, setShowCart] = useState(false);

    const handleSearchClose = () =>{
        setShowSearch(false);
    }

    const handleSearch = () =>{
        setShowSearch(true);
    }

    const handleMenu = () =>{
        const navbar = document.querySelector(".bottom");
        navbar.style.transform = "translateX(0)";
        setShowMenu(true)
    }
    const handleMenuClose = () =>{
        const navbar = document.querySelector(".bottom");
        navbar.style.transform = "translateX(100%)";
        setShowMenu(false);
    }

    const handleCart = () =>{
            setShowCart(true)
    }
    return (
        <header className=' main_header '>
            <div className=" container header_top">
                <div className="left">
                    <ul className='container'>
                        <li className="containerCenter">
                            <Link href="/" className='links'>
                                <CgMail  className='icons' />rameshyadav@gami.com
                            </Link>
                        </li>
                        <li className="containerCenter">
                            <Link href="/" className='links'>
                                <BsTelephoneMinusFill  className='icons' />+9779800034000
                            </Link>
                        </li>
                        <li className="containerCenter">
                            <Link href="/">
                                <BsFacebook className='icons' />
                                <BsInstagram className='icons' />
                                <AiFillLinkedin className='icons' />
                                <AiFillGithub  className='icons'/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <ul className='container'>
                        <li className="containerCenter"><Link href="/" className='links'>sing in</Link></li>
                        <li className="containerCenter"><Link href="/" className='links'>sing up</Link></li>
                        <li className="containerCenter"><select name="country" id="country">
                            <option value="NPR">NPR</option>
                            <option value="NPR">IPR</option>                                    
                            <option value="NPR">UK</option>
                            <option value="NPR">USA</option>
                            <option value="NPR">CPR</option>
                            </select></li>
                    </ul>
                </div>        
            </div>
                <nav className='main_nav'>
                    <div className=" containerCenter top">
                        <div className="container left">
                            <Link href="/" className='container links'>
                                <Image src="/images/logo.png" alt="logo" width={100} height={100}/>
                                <div className="logo_content">
                                <h1> BAG</h1>
                                <h4>Shopping</h4>
                                </div>
                              
                            </Link>
                        </div>
                       
                        <div className="right">
                                    <AiOutlineSearch className='icons' 
                                    onClick={handleSearch}
                                    />

                                    <AiOutlineShoppingCart className='icons' onClick={handleCart}/>


                                  {showSearch &&  <div className=" container search">
                                        <input type="text" id='search' placeholder='Search Here...' />
                                        <div>

                                        <HiOutlineXMark className="icons"
                                         onClick={handleSearchClose} 
                                         />
                                        </div>
                                        
                                    </div>}
                        </div>

                        <div className="menu">
                          {!showMenu &&  <AiOutlineMenu className='icons'
                            onClick={handleMenu}/>}

                              {showMenu && <HiOutlineXMark className="icons"
                                         onClick={handleMenuClose} />}
                        </div>
                    </div>
                    <div className="bottom">
                        <Nav/>
                    </div>
                </nav>
               {showCart && <div className="cart">
                <Cart cartSatus ={setShowCart}/>
                </div>}
               
        </header>
    )
}

export default Header
