import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../../services/categoryApi";
import { useDispatch, useSelector } from "react-redux";
import { setCatgory } from "../../store/features/product";
import Category from "./Category";

export default function CategoryLists ({ isVertical}) {
    const [page , setPage] = useState(1);
    const [ perPage , setPerpage ] = useState(10);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.product.categories)

    const { data , isSuccess } = useGetCategoriesQuery({ perPage , page })

    useEffect(() => {
        dispatch(setCatgory(data?.data))
    }, [isSuccess])
    
    const classProps = isVertical? "flex flex-col gap-3" : "flex items-center justify-center gap-x-3 gap-y-5 flex-wrap";
    return (
        <div className={`${classProps}`}>
            {categories?.length !== null&& categories?.map((ct, index) => (
                <Category key={index} data={ct} isVertical={isVertical} />
            ))}
        </div> 
    )
}