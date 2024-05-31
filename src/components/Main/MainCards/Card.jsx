"use client"
import { Basket } from '@/Context/BasketContext'
import Link from 'next/link'
import React, { useContext } from 'react'

function Card({ id, img, category, name, composition, price }) {
    const { addBasket, setAddBasket } = useContext(Basket)

    function handleBasket() {
        const elem = addBasket.findIndex(item => item.id === id)
        if (elem !== -1) {
            let newarr = addBasket;
            newarr[elem] = { ...newarr[elem], count: newarr[elem].count + 1 }
            setAddBasket([...newarr])
        } else {
            setAddBasket([...addBasket, {
                id: id,
                name: name,
                img: img,
                count: 1,
                price: typeof price === "number" ? price : price.xs || price.sm || price.md || price.lg
            }])
        }
    }



    return (
        <div className="card">
            <Link className='cardText' href={`/menu/${category}/${id}`}>
                <div className="cardTop"><img src={img} alt="mehsul" /></div>
            </Link>
            <div className="cardBottom">
                <div className='cardBtn'>
                    <Link className='cardText' href={`/menu/${category}/${id}`}> <span>{name}</span> </Link>
                    <button onClick={handleBasket} >BUNU SEÇ</button>
                </div>
                <Link className='cardText' href={`/menu/${category}/${id}`}><p> {composition} </p> </Link>
            </div>
        </div>
    )
}

export default Card