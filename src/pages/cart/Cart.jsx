import { useDispatch, useSelector } from 'react-redux'
import { SingleCart } from './container/SingleCart.jsx'
import { Link } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { useOrderMutation } from '../../services/orderApi.js'
import { removeAllFromCarts } from '../../store/features/product.js'

const Cart = () => {
  const carts = useSelector(state => state.product.carts)
  const orders = useSelector(state => state.product.orders)
  const totalPrice = useSelector(state =>  state.product.totalPrice)
  const MySwal = withReactContent(Swal)

  const dispatch = useDispatch();
  const [ createOrder , { isLoading , isError , isSuccess } ] = useOrderMutation();

  const handleOrder = async (e) => {
    e.preventDefault();
    MySwal.fire({
      title: "Are you sure to order?",
      // text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await createOrder(orders)
        console.log(data)
        if(data?.msg){
          MySwal.fire({
            title: `${data?.msg}`,
            showConfirmButton: false ,
            timer: 1500
          })
        }
        dispatch(removeAllFromCarts())
      }
    })

  }

  if(carts?.length === 0){
    return (
        <section className="mx-auto max-w-7xl">
          <div className="w-full h-auto ">
            <div className="flex gap-5 items-center flex-col justify-center w-full h-[500px]">
              <h3 className="text-xl tracking-wider font-semibold"> There is no more items in the carts</h3>
              <p className="text-md">Go and Get some items from the shops</p>
              <Link to="/shops" className="border border-primary px-6 py-2 text-black" >
                Back
              </Link>
            </div>
          </div>
        </section>
    )
  }else {
    return (
        <>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <header className="text-center">
                  <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Your Cart
                  </h1>
                </header>
                <div className="mt-8">
                  <ul className="space-y-4">
                    {
                        carts?.length > 0 && carts?.map((item , index) => (
                            <SingleCart data={item} key={index} />
                        ))
                    }
                  </ul>
                  <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                    <div className="w-screen max-w-lg space-y-4">
                      <dl className="space-y-0.5 text-sm text-gray-700">
                        <div className="flex justify-between !text-base font-medium">
                          <dt>Total</dt>
                          <dd>{totalPrice.toFixed(2)}</dd>
                        </div>
                      </dl>
                      <div className="flex justify-end">
                        <button
                            onClick={handleOrder}
                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
  }
}

export default Cart