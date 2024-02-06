import { ReactTyped } from "react-typed"
import IntroImg from "../../../image/IntroImg.jpg"
import { Link } from "react-router-dom"
export const Intro = () => {

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-20">
        {/* Your text content */}
        <div className="flex-1 mr-8">
          <h2 className="text-5xl font-semibold mb-4 tracking-wider">
            Grap some products
            {/* <ReactTyped strings={["Welcome to Our E-Commerce Store"]} typeSpeed={40} backSpeed={50} loop /> */}
          </h2>
          <p className="text-gray-700 text-md mb-5 font-san tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="cursor-pointer border rounded-full border-blue-400 text-blue-500 px-6 py-2 my-3 transition font-semibold hover:bg-blue-400 hover:text-white " href="#allProducts" >Shop Now</a>
        </div>
        {/* Your image */}
        <div className="flex-1">
          <img
            src={IntroImg} // Replace with your image URL
            alt="E-Commerce Store"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}