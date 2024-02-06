import { Link, useSearchParams } from "react-router-dom";

export default function Category ({data , isVertical}){
    const [searchParams] = useSearchParams();
    const isActive = searchParams.get("category") === data?.slug ? "bg-primary border border-primary text-white" : "";
    const classProps = isVertical ? "border px-6 py-2 border-textColor hover:border-l-4 transition-all duration-200 ease-in-out" : "px-6 py-2 border-2 border-primary text-md w-auto rounded-md";
    return (
        <Link to={`/shops?category=${data?.slug}`} className={`${classProps} ${isActive}`} >
            {data?.title}
        </Link>
    )
}