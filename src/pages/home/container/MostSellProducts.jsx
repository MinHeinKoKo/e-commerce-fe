import { useSelector } from "react-redux"
import Product from "../../../components/main/Product"

export default function MostSellProducts () {
    const products = useSelector(state => state.product.mostSells)
    return (
        <div className="max-w-7xl mx-auto my-8">
            <h3 className="capitalize text-center text-lg font-semibold tracking-wider my-5">The following are the top Selling Items</h3>
            <div className="grid md:grid-cols-4 gap-5">
            {products?.length !== 0 && products?.map((p , i) => (
                <Product data={p} key={i} />
            ))}
            </div>
        </div>
    )
}