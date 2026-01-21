
const ShimmerLayout = () => {
    return (
        <div className="p-2 m-4 w-60 rounded-2xl shadow-lg animate-pulse">
            <div className="w-full h-36 bg-gray-300 rounded-lg"></div>
            <ul className="mt-3 space-y-2">
                <li className="h-4 bg-gray-300 rounded w-11/12"></li>
                <li className="h-3 bg-gray-300 rounded w-7/12"></li>
            </ul>
        </div>
    )
};

export default ShimmerLayout;
