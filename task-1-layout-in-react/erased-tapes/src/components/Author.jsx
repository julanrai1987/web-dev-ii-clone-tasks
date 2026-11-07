const Author = () => {
    return (
        <section className="author-section">
            <div className="author-intro">
                <h2 id="author-heading">
                    The Author
                </h2>
                <p>
                    Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.

                    {/* display block is used in span because it needs to be a block-level element and it to acquired full width */}
                    <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                        Copyright © {new Date().getFullYear()} Erased Disks Ltd.
                    </span>
                </p>
            </div>

            <img className="author-image" src="/profile_picture.jpg" alt="Author's profile picture" />

            <div className="author-socials">
                <img src="/facebook-icon.png" alt="Facebook" />
                <img src="/instagram-icon.svg" alt="Instagram" />
                <img src="/twitter-icon.svg" alt="Twitter" />
            </div>
        </section>

    )
}

export default Author