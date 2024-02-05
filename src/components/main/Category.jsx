import { Link } from "react-router-dom";

export default function Category ({data , isVertical}){
    const classProps = isVertical ? "" : "px-6 py-2 border-2 border-primary text-md w-auto rounded-md";
    return (
        <Link to={`/shops?category=${data?.title}`} className={`${classProps}`} >
            {data?.title}
        </Link>
    )
}