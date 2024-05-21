import Card from '@/components/Main/MainCards/Card'
import PizzaSelect from '@/components/Main/MainCards/PizzaSelect'
import NotFount from '@/components/NotFount'
import React from 'react'

async function page({ params }) {
    const category = params.category == "qelyanaltilar" ? "Qelyanaltılar" : params.category == "ickiler" ? "İçkilər" : params.category

    const res = await fetch("https://papaapi.yetim.me/food")
    const req = await res.json()
    let data = req?.filter(item => item.category == category)
    return (
        <>
            {category == "Pizzalar" && <PizzaSelect />}

            <div className="cards">
                {data.length !== 0 ?
                    data?.map(item => (<Card
                        key={item.id}
                        {...item}
                    // addItem={() => { addBasket(item.name, item.price) }}
                    />
                    ))
                    :
                    <NotFount />
                }
            </div>
        </>
    )
}

export default page