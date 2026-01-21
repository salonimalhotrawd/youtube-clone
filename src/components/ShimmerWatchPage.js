const ShimmerWatchPage = () => {
    return (
        <div className="px-5 py-3">
            <div className="flex gap-6">
                {/* LEFT SIDE */}
                <div className="w-[70%]">
                    {/* Video player shimmer */}
                    <div className="w-full h-[420px] bg-gray-200 rounded-xl animate-pulse"></div>

                    {/* Title shimmer */}
                    <div className="mt-4 space-y-2">
                        <div className="w-[90%] h-5 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-[60%] h-5 bg-gray-200 rounded animate-pulse"></div>
                    </div>

                    {/* Channel row shimmer */}
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>

                            <div className="space-y-2">
                                <div className="w-40 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-56 h-3 bg-gray-200 rounded animate-pulse"></div>
                            </div>

                            <div className="w-28 h-9 bg-gray-200 rounded-full animate-pulse ml-4"></div>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-24 h-9 bg-gray-200 rounded-full animate-pulse"></div>
                            <div className="w-20 h-9 bg-gray-200 rounded-full animate-pulse"></div>
                            <div className="w-20 h-9 bg-gray-200 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Description shimmer */}
                    <div className="mt-5 bg-gray-100 rounded-xl p-4 space-y-2">
                        <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-[95%] h-3 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-[85%] h-3 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-[30%] h-3 bg-gray-200 rounded animate-pulse mt-2"></div>
                    </div>

                    {/* Comments shimmer */}
                    <div className="mt-6 space-y-4">
                        <div className="w-40 h-5 bg-gray-200 rounded animate-pulse"></div>

                        {[1, 2, 3, 4].map((x) => (
                            <div key={x} className="flex gap-3">
                                <div className="w-9 h-9 bg-gray-200 rounded-full animate-pulse"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="w-32 h-3 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-[90%] h-3 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-[70%] h-3 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-[30%]">
                    <div className="w-32 h-4 bg-gray-200 rounded animate-pulse mb-4"></div>

                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((x) => (
                            <div key={x} className="flex gap-3">
                                <div className="w-40 h-24 bg-gray-200 rounded-xl animate-pulse"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="w-[90%] h-3 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-[75%] h-3 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-[50%] h-3 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShimmerWatchPage;
