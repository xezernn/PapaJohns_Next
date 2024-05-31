import ProductDetails from "@/components/Main/ProductDetails"
import { getElementById } from "@/services/services"

async function page({ params }) {
    const id = params.id
    const data = await getElementById(id)

    return (
        <>
            <ProductDetails {...data} />
        </>
    )
}

export default page