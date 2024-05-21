import React from 'react'
import Image from 'next/image'
import { FaQuestion, FaUser } from "react-icons/fa";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import Link from 'next/link';
import logo from '@/assets/img/logo.png';

function Header() {
    const say = ""

    return (
        <header>
            <div className='container'>
                <div className="headerTop">
                    <Link href="/" id='logo'>
                        {/* <Image src={logo} alt="logo" /> */}
                        <img src='https://www.papajohns.az/img/content/pj_logo_web_new.png' alt="logo" />
                    </Link>
                    <div className='topMenu'>
                        <ul>
                            <li><Link href="#">Restoranlar</Link></li>
                            <li><Link href="#">PapaBonus</Link></li>
                        </ul>
                    </div>
                    <div className="headerLogin">
                        <div className='headerIcon'>
                            <img id='azFlag' src="https://www.papajohns.az/img/content/flag_az.png" alt="AZ Flag" />
                            <p className='textMobil'>Az</p>
                            <p className='textDesk'>Azərbaycanca</p>
                        </div>
                        <div className='headerIcon'>
                            <FaUser className='icon' />
                            <p className='textMobil'>Giriş</p>
                            <p className='textDesk'>Giriş / Qeydiyyat</p>
                        </div>
                        <div className='headerIcon flexCol'>
                            <RiShoppingBasket2Fill className='icon' />
                            <p>{say.toString().length > 4 ? say.toFixed(2) : say}₼</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* header bottom burdan baslayir */}

            <div className='headerRed'>
                <div className="container">
                    <div id='redBar'>
                        <Link href="/" id='redLogo'>
                            <Image priority src={logo} alt="logo" />
                        </Link>
                        <ul id='menuList'>
                            <li><Link href="/kompaniyalar">Kampaniyalar</Link></li>
                            <li><Link href="/menu/Papadias">Papadias</Link></li>
                            <li className="active"><Link href="/menu/Pizzalar">Pizza</Link></li>
                            <li><Link href="/menu/qelyanaltilar">Qəlyanaltı</Link></li>
                            <li><Link href="/menu/Salatlar">Salat</Link></li>
                            <li><Link href="/menu/Pastalar">Pasta</Link></li>
                            <li><Link href="/menu/ickiler">İçki</Link></li>
                            <li><Link href="/menu/Desserts">Desert</Link></li>
                            <li><Link href="/menu/Souslar ">Sous</Link></li>
                        </ul>
                        <span id='bal'>
                            0 Bal
                            <FaQuestion />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
