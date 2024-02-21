import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";

export default function PostsList() {
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    function handleBodyChange(e) {
        setBody(e.target.value);
    }

    function handleAuthorChange(e) {
        setAuthor(e.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={handleBodyChange} onAuthorChange={handleAuthorChange} />
            <ul className={styles.posts}>
                <Post author={author} body={body} />
                <Post author={author} body={body} />
            </ul>
        </>
    );
}
