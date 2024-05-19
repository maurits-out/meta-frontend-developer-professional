import logo from "../images/Logo.svg";

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <p>Copyright Little Lemon (2024)</p>
            </div>
        </footer>
    );
}

export default Footer;
