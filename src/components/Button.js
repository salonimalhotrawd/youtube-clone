const Button = (props) => {
    const { name } = props;
    return (
        <div>
            <button className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-full whitespace-nowrap hover:bg-gray-200 transition">{name}</button>
        </div>
    )
};

export default Button;