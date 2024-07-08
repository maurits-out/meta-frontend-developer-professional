import Navigation from './Navigation';

const headerStyle = {
    maxWidth: '850px',
    margin: 'auto',
};

function Header() {
    return (
        <header style={headerStyle}>
            <Navigation />
        </header>
    );
}

export default Header;
