import ProductDetails from "@/components/Main/ProductDetails"

async function page({ params }) {
    const id = params.id
    const res = await fetch(`https://papaapi.yetim.me/food/${id}`)
    const data = await res.json()

    return (
        <>
            <ProductDetails {...data}  />
        </>
    )
}
 
export default page