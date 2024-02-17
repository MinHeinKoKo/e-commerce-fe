import Pagination from "../../../components/Pagination"
import Product from "../../../components/main/Product"
export default function Products({
    keyword, page, setPage, perPage, setPerPage, totalPage, data
}) {
    console.log('Products', data)
    return (
        <section id="allProducts">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Product Collection
                    </h2>
                    <p className="mt-4 max-w-md text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>
                <div className="mt-8">
                    <p className="text-sm text-gray-500">
                        Showing <span> 4 </span> of 40
                    </p>
                </div>
                <ul className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
                    {
                        data?.map((item , index) => (
                            <Product key={index}  data={item}/>
                        ))
                    }
                </ul>
                <Pagination page={page} setPage={setPage} perPage={perPage} setPerPage={setPerPage} totalPage={totalPage} />
            </div>
        </section>

    )
}