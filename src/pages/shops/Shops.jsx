import { useSearchParams } from "react-router-dom"
import { Intro } from "./container/Intro"
import Products from "./container/Products"
import SideBar from "./container/SideBar"
import { useEffect, useState } from "react"
import { useGetProductsQuery } from "../../services/productApi"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../../store/features/product"

const Shops = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("category") !== null ? searchParams.get("category") : "";

  const [perPage , setPerPage]  = useState(12);
  const [page , setPage] = useState(1);
  const [totalPage , setTotalPage] = useState();

  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products)
  const { data, refetch , isSuccess } = useGetProductsQuery({ perPage, page, keyword }, {refetchOnMountOrArgChange: true});

  useEffect(() => {
    // const fetchData = async () => {
    //   await refetch(); // Wait for refetch to complete
      if (isSuccess) {
        dispatch(setProducts(data?.data));
        setTotalPage(data?.meta?.totalPages);
      }
    // };
  
    // fetchData(); // Call the async function
  }, [page, isSuccess, refetch, dispatch, data, setTotalPage]); // Include 'page' as a dependency
  
  return (
    <div>
      <Intro />
      <div className="grid grid-cols-6 max-w-7xl h-auto mx-auto">
        <SideBar />
        <div className="col-span-5">
          <Products keyword={keyword} page={page} setPage={setPage} perPage={perPage} setPerPage={setPerPage} totalPage={totalPage} data={products} />
        </div>
      </div>
    </div>
  )
}

export default Shops
