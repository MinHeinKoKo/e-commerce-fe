import CategoryLists from "../../../components/main/CategoryLists";

export default function Categories () {
    return (
        <div className="max-w-5xl mx-auto my-5">
            <h3 className="text-lg tracking-wider my-3">Top Categories</h3>
            <div>
                <CategoryLists isVertical={false} />
            </div>
        </div>
    )
}