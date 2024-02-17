import { Link } from "react-router-dom"
import Logo from "../../image/Logo/trans-logo.png"
import { useSelector } from 'react-redux'

export const Navbar = () => {

    const user = useSelector(state => state.auth.user)
    const carts = useSelector(state => state.product.carts);
    const numberOfCarts = carts?.length;
    return (
        <header className="bg-white font-poppin">
            <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
                <Link className="block" to="/">
                    <span className="sr-only">Home</span>
                    <img src={Logo} className="object-cover h-8" />
                </Link>
                <div className="flex items-center justify-end flex-1 md:justify-between">
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <Link to="/shops"
                            className="font-semibold text-textColor transition text-md hover:text-gray-700/75"
                            >
                            {" "}
                            Shops{" "}
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="relative ">
                                <span className="w-10 h-10 font-semibold text-textColor transition text-md hover:text-textColor/75">carts</span>
                                {numberOfCarts > 0 && (
                                    <span
                                        className="absolute top-0 left-8 transform -translate-y-1/2 w-5 h-5 text-xs">
                                      {numberOfCarts}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="font-semibold text-textColor transition text-md hover:text-textColor/75"
                                to="/"
                            >
                            {' '}
                                History{' '}
                            </Link>
                        </li>
                        <li>
                            <a
                                className="font-semibold text-textColor transition text-md hover:text-textColor/75"
                                href="/"
                            >
                                {' '}
                                Services{' '}
                            </a>
                        </li>
                        <li>
                            <a
                            className="font-semibold text-textColor transition text-md hover:text-gray-500/75"
                            href="/"
                            >
                            {" "}
                            Blog{" "}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        {!user ? (
                            <>
                                <Link
                                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary/70"
                                    to="/login"
                                >
                                    Login
                                </Link>
                                <Link
                                    className="hidden rounded-md bg-white border border-primary px-5 py-2.5 text-sm font-medium text-textColor transition hover:bg-teal-600 hover:border-teal-600 hover:text-white sm:block"
                                    to="/"
                                >
                                    Register
                                </Link>
                            </>
                        ): (
                            <Link to="/profile" className="">
                                <h3>{user?.name}</h3>
                                <p className="text-sm text-gray-600">{user?.email}</p>
                            </Link>
                        )}
                    </div>
                    <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                </div>
            </div>
        </header>
    )
}