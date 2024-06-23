import logo from "../images/Logo.svg";

const navStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 40px',
};

const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0',
    padding: '0',
};

const navLinkItemStyle = {
    margin: '10px 20px 10px 0',
};

const navLinkStyle = {
    textDecoration: 'none',
    fontSize: '20px',
    padding: '10px 0',
};

const imageStyle = {
    height: '4rem',
};


function Navigation() {
    return (
        <nav style={navStyle}>
            <div>
                <img src={logo} alt="Little Lemon Logo" style={imageStyle} />
            </div>
            <ul style={navLinksStyle}>
                <li style={navLinkItemStyle}><a href="/" style={navLinkStyle}>Home</a></li>
                <li style={navLinkItemStyle}><a href="/about" style={navLinkStyle}>About</a></li>
                <li style={navLinkItemStyle}><a href="/menu" style={navLinkStyle}>Menu</a></li>
                <li style={navLinkItemStyle}><a href="/reservations" style={navLinkStyle}>Reservations</a></li>
                <li style={navLinkItemStyle}><a href="/order-online" style={navLinkStyle}>Order online</a></li>
                <li style={navLinkItemStyle}><a href="/login" style={navLinkStyle}>Login</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
