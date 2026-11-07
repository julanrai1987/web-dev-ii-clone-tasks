const Header = () => {
    return (
        <header className="app-header">
            <img src={"/logo.svg"} className="logo" alt="Erased Tapes" />

            <nav>
                <a href="">Our Blog </a>
                <a href="">Our Artists</a>
                <a href="">Our Story</a>
            </nav>
        </header>
    );
}

export default Header;