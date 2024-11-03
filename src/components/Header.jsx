

const Header = ({ title, description, className }) => {
    return (
        <div>
            <h1 className={className}>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Header;