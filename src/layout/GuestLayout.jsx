// import { useQuery } from "react-query"
import {  useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useMostSellItemsQuery } from "../services/productApi"
import { setMostSells } from "../store/features/product";

const GuestLayout = () => {
  const { data , isSuccess: ms } = useMostSellItemsQuery();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(setMostSells(data))
  }, [ms])
  
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default GuestLayout