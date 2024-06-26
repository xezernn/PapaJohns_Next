"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { FaQuestion, FaUser } from "react-icons/fa";
import Link from 'next/link';
import logo from '@/assets/img/logo.png';
import { Basket } from '@/Context/BasketContext';
import { Toaster } from 'react-hot-toast';

function Header() {
    const { isOpen, setIsOpen, addBasket, setAddBasket ,price , delBasket, handleCount, sifarisiGonder } = useContext(Basket)  

    return (
        <header>
            <div className='container'>
                <div className="headerTop">
                    <Link href="/" id='logo'>
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
                        <div className='headerIcon flexCol' onClick={() => setIsOpen(!isOpen)}>
                            <div className="icosSup">
                                <span style={{ display: addBasket.length && "flex" }}>{addBasket.length}</span>
                                <img className='icon' src="https://icons.veryicon.com/png/o/application/font-awesome/shopping-basket-19.png" alt="icons" />
                            </div>
                            <p>{price.toString().length > 4 ? price.toFixed(2) : price}₼</p>
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

            <div className='sebetBlur'
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    opacity: isOpen ? "1" : "0",
                    visibility: isOpen ? "visible" : "hidden"
                }}
            >
            </div>

            <div className="sebet"
                style={{
                    right: isOpen ? "0%" : "-100%"
                }}>

                <h2>Səbətiniz</h2>

                <div className='sebetElements'>
                    {
                        addBasket?.map((item, i) => (
                            <div key={item.id} className='sebetItem'>
                                <div onClick={() => delBasket(item.id)} className="iconsClose">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
                                </div>
                                <div className='sebetImg'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='sebetText'>
                                    <div className='sebetJustify'>
                                        <div className='sebetName'>
                                            <h4>{item.name}</h4>
                                            <p>{item.name}</p>
                                        </div>

                                        <div className='sebetSelect'>
                                            <button onClick={() => handleCount(1, i)}>+</button>
                                            <span>{item.count}</span>
                                            <button onClick={() => handleCount(-1, i)} > -</button>
                                        </div>
                                    </div>
                                    <div className='sebetPrice' >
                                        {item.price}₼
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div
                    style={{
                        right: isOpen ? "0%" : "-100%"
                    }}
                    className='sebetBottom'>
                    <h6>
                        Ümumi məbləğ: {price}₼
                    </h6>
                    <div>
                        <button onClick={() => setAddBasket([])}>Sebeti silin</button>
                        <button onClick={sifarisiGonder}>Sebeti tamamla</button>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </header >
    )
}

export default Header
