// import { useQuery } from "react-query"
import {  useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useMostSellItemsQuery } from "../services/productApi"
import { setMostSells } from "../store/features/product";
import { Navbar } from "../components/main/Navbar";
import Breadcrumb from "../components/BreadCrumb";
import Footer from "../components/main/Footer";
// import { Breadcrumb } from "../components/Breadcrumb";

const GuestLayout = () => {
  const { data , isSuccess: ms } = useMostSellItemsQuery();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(setMostSells(data))
  }, [ms])
  
  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="max-w-7xl mx-auto">
      <Breadcrumb />
      </div>
        <Outlet />

        <Footer />
    </div>
  )
}

export default GuestLayout