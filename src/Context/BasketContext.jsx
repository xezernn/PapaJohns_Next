"use client"

import { postBasket } from '@/services/services'
import React, { createContext, useEffect, useState } from 'react'
export const Basket = createContext(null)

function BasketContext({ children }) {
    const [addBasket, setAddBasket] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [price, setPrice] = useState(0)

    // sebet acilan zaman ekrani sabitleyir
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""
        document.body.style.padding = isOpen ? "0 15px 0 0" : "0"
    }, [isOpen])

    // sebetin iconunun uzerindeki meblegi qeyd edir
    useEffect(() => {
        let currentValue = 0
        addBasket.forEach(item => { currentValue += item.price * item.count })
        setPrice(currentValue)
    }, [price, addBasket])

    // sebetden verilmis secilmis elementi silir
    const delBasket = (id) => setAddBasket(addBasket.filter(item => item.id != id))

    // secilmis pizzanin sayini artirmaq ve azaltmaq ucun funksiya
    function handleCount(newCount, i) {
        let newArr = [...addBasket];
        newArr[i].count += newCount;

        if (newArr[i].count <= 0) {
            delBasket(newArr[i].id);
            newArr.splice(i, 1);
        } else setAddBasket(newArr)
    }

    // secilen pizzalrin sifarisini gondermek ucun...
    function sifarisiGonder() {
        postBasket(addBasket)
        setAddBasket([])
        toast.success("Sifarisiniz testiqlendi...")
    }

    return (
        <Basket.Provider value={{
            addBasket,
            setAddBasket,
            isOpen,
            setIsOpen,
            price,
            setPrice,
            delBasket,
            handleCount,
            sifarisiGonder
        }}>
            {children}

        </Basket.Provider>
    )
}

export default BasketContext