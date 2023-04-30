import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {BsFacebook,BsInstagram} from "react-icons/bs";
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai";

const footer = () => {
    return (
        <footer className='footers'>
            <div className="logo">
                <div className="container">
                    <Link href="/"  className='container links'>
                        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
                        <div className="footer_logo_content">
                            <h1> BAG</h1>
                            <h4>Shopping</h4>
                        </div>

                    </Link>
                </div>
            </div>
            <div className="qlink">
                <h1>Quick Links</h1>
                <ul>
                    <li><Link href="/" className='link' >home</Link></li>
                    <li><Link href="/" className='link' >about</Link></li>
                    <li><Link href="/" className='link' >contacts</Link></li>
                </ul>
            </div>
            <div className="service">
                <h1>Customer Service</h1>
                <ul>
                    <li><Link href="/" className='link' >Terms of Use</Link></li>
                    <li><Link href="/" className='link' >Return Policy</Link></li>
                    <li><Link href="/" className='link' >Shipping and Delivery</Link></li>
                    <li><Link href="/" className='link' >Privacy  Policy</Link></li>
                </ul>
            </div>
            <div className="others">
                <p>We’d love to see you in our Facebook Group!</p>
                <button className='footer_btn'>follow me</button>
                <ul>
                    <li><BsFacebook className='icons icons1' /></li>
                    <li><BsInstagram className='icons icons1' /></li>
                    <li><AiFillLinkedin className='icons icons1' /></li>
                    <li> <AiFillGithub className='icons icons1' /></li>
                </ul>
            </div>
        </footer>
    )
}

export default footer
