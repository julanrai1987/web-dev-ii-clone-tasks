const Header = () => {
    return (
        <header className="app-header">

            <h1 className="app-logo">
                Watch.it
            </h1>

            {/* navbar of the site */}
            <nav className="genre-nav">
                <a href="#action">Action</a>
                <a href="#comedy">Comedy</a>
                <a href="#romance">Romance</a>
                <a href="#drama">Drama</a>
            </nav>

            <button className="search-button" type="button">
                Search
            </button>

        </header>
    )
}

export default Header