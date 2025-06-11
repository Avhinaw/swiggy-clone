import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
        <div className='h-[70vh] w-screen bg-[#f0f0f5] border-b'>
        <div className='px-56 py-15 flex gap-24 border-black mt-14'>
            <div>
                <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="swiggy" />
                <h4>© 2025 Swiggy Limited</h4>
                </div>
            <div className='grid grid-cols-4 gap-15'>
                <div>
                    <h4 className='text-xl font-bold mb-4'>Company</h4>
                    <ul className='space-y-4'>
                        <li>About Us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Dineout</li>
                        <li>Swiggy Genie</li>
                        <li>Minis</li>
                        <li>Pyng</li>
                    </ul>
                </div>
                <div className=''>
                    <h4 className='text-xl font-bold mb-4'>Contact us</h4>
                    <ul className='space-y-4 mb-24'>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                    <h4 className='text-xl font-bold mb-4'>Legal</h4>
                    <ul className='space-y-4'>
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold mb-4'>Available in:</h4>
                    <ul className='space-y-4'>
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                        <li>685 cities</li>
                    </ul>
                </div>
                <div className=''>
                    <h1 className='text-xl font-bold mb-4'>Life at Swiggy</h1>
                    <ul className='space-y-4 mb-24'>
                        <li>Explore with Swiggy</li>
                        <li>Swiggy News</li>
                        <li>Snackables</li>
                    </ul>
                    <h4 className='text-xl font-bold mb-4'>Social Links</h4>
                    <div className='flex items-center gap-3 text-lg'>
                    <FaLinkedin />
                    <FaInstagram />
                    <FaFacebookF />
                    <FaPinterest />
                    <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='flex gap-6 items-center py-10 px-54 bg-[#f0f0f5]'>
            <h6 className='text-2xl font-bold'>For better experience, download the Swiggy app now</h6>
            <img src="./icon-AppStore_lg30tv.png" alt="" />
            <img src="./icon-GooglePlay_1_zixjxl.png" alt="" />
        </div>
        </>
    )
}
