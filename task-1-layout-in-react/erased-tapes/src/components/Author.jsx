const Author = () => {
    return (
        <section className="author-section">
            <div className="author-intro">
                <h2 id="author-heading">
                    The Author
                </h2>
                <p>
                    Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.

                    Copyright © 2023 Erased Disks Ltd.
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