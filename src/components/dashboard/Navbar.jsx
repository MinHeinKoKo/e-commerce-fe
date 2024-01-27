import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  handleClicked,
  setActive,
  setThemes,
} from "../../store/features/display";
import {
  AiOutlineMessage,
  AiFillBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillSunFill , BsFillMoonFill } from "react-icons/bs"
import Cookies from "js-cookie";

const Navbar = () => {
  const active = useSelector((state) => state.display.activeMenu);
  const currentMode = useSelector(state => state.display.currentMode);
//   const {name , email} = JSON.parse(Cookies.get("user"))
const name = "Admin"
const email = "admin@example.com"
  const dispatch = useDispatch();

  const handleClose = () => {
    if (active) {
      dispatch(setActive(false));
    } else {
      dispatch(setActive(true));
    }
  };
  const handleNoti = (item) => {
    dispatch(handleClicked({ value: item }));
  };
  const toDark = () => {
    dispatch(setThemes("Dark"))
  }
  const toLight = () => {
    dispatch(setThemes("Light"))
  }

  return (
    <div className="flex justify-between px-3 py-3 lg:justify-between">
      <div>
        <button onClick={handleClose} className="p-2 rounded-lg ">
          <FaBars className="text-xl text-tertiary" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        {currentMode === "Light" ? (
          <button onClick={toDark}><BsFillMoonFill className="text-xl text-tertiary"/></button>
        ):(
          <button onClick={toLight}><BsFillSunFill className="text-xl text-yellow-200"/></button>
        )}
        <AiOutlineShoppingCart className="text-2xl text-tertiary" />
        <AiFillBell className="text-2xl text-tertiary" />
        <AiOutlineMessage
          onClick={() => handleNoti("cart")}
          className="text-2xl text-tertiary"
        />

        <div className="flex items-center gap-2">
          <div className="relative overflow-hidden bg-gray-100 rounded-full w-7 h-7 dark:bg-gray-600">
            <svg
              className="absolute text-gray-400 w-9 h-9 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-600 dark:text-main">{name}</h3>
            <p className="text-xs text-gray-400 dark:text-main">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
