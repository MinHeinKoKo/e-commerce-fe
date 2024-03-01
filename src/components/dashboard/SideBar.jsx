import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsShop } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import { setActive, setScreenSize } from "../../store/features/display";

const SideBar = () => {
  const screenSize = useSelector((state) => state.display.screenSize);
  const dispatch = useDispatch();
  const active = useSelector((state) => state.display.activeMenu);
  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });
  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(setActive(false));
    } else {
      dispatch(setActive(true));
    }
  }, [screenSize]);


  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 text-md m-2 text-tertiary border-l-4 border-tertiary";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="h-full ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {active && (
        <>
          <div className="flex items-center justify-between">
            <Link to="/"
              
              className="flex gap-3 mt-4 ml-3 text-xl font-extrabold item-center -tracking-tight dark:text-white text-stroke"
            >
              <BsShop className="text-3xl" /> <span>M1n's Shop</span>
            </Link>
          </div>
          <div className="mt-10">
            <div className="">
              <p className="m-3 mt-4 text-gray-400 uppercase">Dashboard</p>
            </div>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              {" "}
              <FiShoppingBag /> <span className="capitalize">
                E-commerce
              </span>{" "}
            </NavLink>
            <div className="">
              <p className="m-3 mt-4 text-gray-400 uppercase">Product</p>
            </div>
            <NavLink
              to="product"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <MdProductionQuantityLimits />
              <span className="capitalize">Product</span>
            </NavLink>
            <NavLink
              to="discount"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <CiDiscount1 />
              <span className="capitalize">Discount</span>
            </NavLink>
            <NavLink
              to="orders"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <CiDeliveryTruck />
              <span className="capitalize">Orders</span>
            </NavLink>
            <NavLink
              to="category"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <BiCategoryAlt />
              <span className="capitalize">Category</span>
            </NavLink>
            <div className="">
              <p className="m-3 mt-4 text-gray-400 uppercase">User</p>
            </div>
            <NavLink
              to="user"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <RiContactsLine />
              <span className="capitalize">user</span>
            </NavLink>
            <NavLink
              to="viewer"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <AiOutlineEye />
              <span className="capitalize">Viewers</span>
            </NavLink>
            <div className="">
              <p className="m-3 mt-4 text-gray-400 uppercase">Charts</p>
            </div>
            <NavLink
              to="product"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <MdProductionQuantityLimits />
              <span className="capitalize">Product</span>
            </NavLink>
            <NavLink
              to="discount"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <CiDiscount1 />
              <span className="capitalize">Discount</span>
            </NavLink>
            <NavLink
              to="orders"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <CiDeliveryTruck />
              <span className="capitalize">Orders</span>
            </NavLink>
            <NavLink
              to="category"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <BiCategoryAlt />
              <span className="capitalize">Category</span>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
