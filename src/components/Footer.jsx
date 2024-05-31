"use client"

import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTripadvisor, FaTwitter } from 'react-icons/fa'
function Footer() {
    return (
        <footer>
            <div className="container">
                <div id='copyElement'>
                    <div className='copy'>
                        © PJA 2023
                    </div>
                </div>
                <div className='footerLeft'>
                    <ul id='footerMenu'>
                        <li><Link href="">Haqqımızda</Link></li>
                        <li><Link href="">Sual-Cavab</Link></li>
                        <li><Link href="">Karyera</Link></li>
                        <li><Link href="">Xəmir</Link></li>
                        <li><Link href="">Papa Talk - Şərtlər və Qaydalar</Link></li>
                    </ul>
                    <ul id='footerMenu' className='footerright'>
                        <li><Link href="">Restoranlar</Link></li>
                        <li><Link href="">Kampaniyalar</Link></li>
                        <li><Link href="">PapaBonus</Link></li>
                    </ul>
                </div>
                <div className="footerBottom">
                    <div className="footerIcons">
                        <a href="tel:+99470923313"><img src="https://www.papajohns.az/img/content/footer-images-az-AZ.png" alt="tel" /></a>
                    </div>
                    <div className="socialIcons">
                        <ul id='socialMenu'>
                            <li>
                                <a href="https://www.facebook.com/papajohns.az/"><FaFacebookF /></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/azpapajohns"><FaTwitter /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/azpapajohns/"><FaInstagram /></a>
                            </li>
                            <li>
                                <Link href=""><FaTripadvisor /></Link>
                            </li>
                        </ul>
                    </div>
                    <div id='copyElement'>
                        <div className='copy'>
                            © PJA 2023
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer