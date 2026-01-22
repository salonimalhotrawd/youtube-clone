import { commentsData } from "../utils/staticDataConstants";

const Comment = ({ data }) => {
    const { user, text, createdAt, likes, dislikes, replies } = data;

    const timeLabel = createdAt ? new Date(createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }) : "just now";

    return (
        <div className="flex gap-3 py-4">
            {/* Avatar */}
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700 shrink-0">
                {user?.avatar || user?.name?.[0] || "U"}
            </div>

            {/* Content */}
            <div className="flex-1">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">
                        {user?.name || "Unknown User"}
                    </p>
                    <span className="text-xs text-gray-500">{timeLabel}</span>
                </div>

                {/* Text */}
                <p className="mt-1 text-sm text-gray-800 leading-relaxed">{text}</p>

                {/* Actions */}
                <div className="mt-2 flex items-center gap-4 text-xs text-gray-600">
                    <button className="flex items-center gap-1 hover:text-black transition">
                        👍 <span>{likes ?? 0}</span>
                    </button>

                    <button className="flex items-center gap-1 hover:text-black transition">
                        👎 <span>{dislikes ?? 0}</span>
                    </button>

                    <button className="font-medium hover:text-black transition">
                        Reply
                    </button>
                </div>

                {/* Replies (Recursive) */}
                {replies?.length > 0 && (
                    <div className="mt-4 pl-5 border-l border-gray-200">
                        <CommentsList comments={replies} />
                    </div>
                )}
            </div>
        </div>
    );
};


const CommentsList = ({ comments }) => {
    return comments?.map((comment) => {
        return <Comment key={comment?.id} data={comment} />;
    });
};

const CommentsGrid = () => {
    return (
        <div className="m-5 p-4 bg-white rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900">
                    Comments <span className="text-gray-500">({commentsData?.length})</span>
                </h1>
            </div>

            <div className="mt-4 divide-y divide-gray-100">
                <CommentsList comments={commentsData} />
            </div>
        </div>
    );
}

export default CommentsGrid;