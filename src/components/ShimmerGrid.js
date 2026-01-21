import ShimmerLayout from "./ShimmerLayout";

const ShimmerGrid = ({ count = 20 }) => {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: count }).map((_, index) => (
        <ShimmerLayout key={index} />
      ))}
    </div>
  );
};

export default ShimmerGrid;