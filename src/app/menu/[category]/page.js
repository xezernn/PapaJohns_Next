import Card from '@/components/Main/MainCards/Card'
import PizzaSelect from '@/components/Main/MainCards/PizzaSelect'
import NotFount from '@/components/NotFount'
import { getAllProducts } from '@/services/services'
import React from 'react'

async function page({ params }) {
    const category = params.category == "qelyanaltilar" ? "Qelyanaltılar" : params.category == "ickiler" ? "İçkilər" : params.category
    let resp = await getAllProducts()
    let data = resp?.filter(item => item.category == category)
    return (
        <>
            {category == "Pizzalar" && <PizzaSelect />}

            <div className="cards">
                {data.length !== 0 ?
                    data?.map(item => (<Card
                        key={item.id}
                        {...item}
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