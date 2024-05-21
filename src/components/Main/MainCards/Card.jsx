import Link from 'next/link'
import React from 'react'

function Card({ id, img, category, name, composition, price, addItem}) {
    return (
        <div className="card">
            <Link className='cardText' href={`/menu/${category}/${id}`}>
                <div className="cardTop"><img src={img} alt="mehsul" /></div>
            </Link>
            <div className="cardBottom">
                <div className='cardBtn'>
                    <Link className='cardText' href={`/menu/${category}/${id}`}> <span>{name}</span> </Link>
                    <button onClick={addItem} >BUNU SEÇ</button>
                </div>
                <Link className='cardText' href={`/menu/${category}/${id}`}><p> {composition} </p> </Link>
            </div>
        </div>
    )
}

export default Card