"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function NotFount() {
    const router = useRouter()


    return (
        <section className='callToAction'>
            <h3>Çox heyif ki, axtarış etdiyiniz kateqoriya üzrə nəticə yoxdur 🥲</h3>
            <div className='promoInp'>
                <button onClick={() => router.push("/menu/Pizzalar", true)} >Əsas səhifəyə keçit etmək üçün klikləyin!</button>
            </div>

        </section>
    )
}

export default NotFount