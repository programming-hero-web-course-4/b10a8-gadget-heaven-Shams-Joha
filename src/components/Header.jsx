

const Header = ({ title, description, className }) => {
    return (
        <div className="flex flex-col items-center gap-5 p-10">
            <h1 className={className}>{title}</h1>
            <p className="text-white w-1/3 text-center">{description}</p>
        </div>
    );
};

export default Header;