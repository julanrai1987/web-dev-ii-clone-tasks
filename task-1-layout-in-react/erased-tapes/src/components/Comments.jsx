const Comments = () => {

    // Created function to reuse the same function for same comment with different username 
    function Comment({ username, children }) {
        return (
            <div className="comment">
                <h3>{username}</h3>
                <p>{children}</p>
            </div>
        )
    }


    return (
        <section className="comments-section">
            <h2 id="comments-heading">
                Comments
            </h2>

            <Comment username="soundseeker92">
                This article beautifully captures the essence of experimental sound.
                Erased Tapes is truly pushing boundaries. Makes me want to revisit
                Nils Frahm's early work. I wonder what you think about their older stuff?
            </Comment>

            <Comment username="Ted Baker">
                I've been following the label for years—so glad someone's finally
                writing about their impact.
            </Comment>

            <Comment username="Queen_of_noise">
                I discovered Erased Tapes through Ólafur Arnalds—this article brought
                back memories and be and my friends listening together. A bit too
                poetic for my taste, but still compelling.
            </Comment>
        </section>
    );
}

export default Comments;