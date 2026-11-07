const Footer = () => {

    return (
        <footer className="app-footer">
            <nav>
                <a href="#">Our Blog</a>
                <a href="#">Our Artists</a>
                <a href="#">Our Story</a>
            </nav>

            <p>
                &copy; {new Date().getFullYear()} Erased Disks Ltd
            </p>

            <div className="footer-socials">
                <img src="/facebook-icon.png" alt="Facebook" />
                <img src="/instagram-icon.svg" alt="Instagram" />
                <img src="/twitter-icon.svg" alt="Twitter" />
            </div>
        </footer>
    );
}

export default Footer;