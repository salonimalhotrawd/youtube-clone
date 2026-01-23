import { Link } from "react-router-dom";

const getErrorConfig = (errorMessage = "") => {
  const msg = errorMessage.toLowerCase();

  if (msg.includes("quota")) {
    return {
      title: "API Limit Reached",
      hint: "YouTube API daily quota is finished. Try again after reset.",
    };
  }

  if (msg.includes("network") || msg.includes("failed to fetch")) {
    return {
      title: "Network Error",
      hint: "Check your internet connection and try again.",
    };
  }

  if (msg.includes("404")) {
    return {
      title: "Not Found",
      hint: "The requested resource is unavailable.",
    };
  }

  return {
    title: "Something went wrong",
    hint: "Please try again after some time.",
  };
};

const ErrorHandler = ({ errorMessage }) => {
  const { title, hint } = getErrorConfig(errorMessage);

  return (
    <div className="w-full flex items-center justify-center mt-16 px-4">
      <div className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-md p-6">
        {/* Icon + Title */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl">
            ⚠️
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-600 mt-1">{errorMessage}</p>
          </div>
        </div>

        {/* Hint */}
        <div className="mt-5 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-700">{hint}</p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => window.location.reload()}
            className="bg-black text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;





