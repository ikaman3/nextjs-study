import styles from "./NewPost.module.css";
import { useState } from "react";

export default function NewPost({ body, onBodyChange, onAuthorChange }) {
    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="body">Body</label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type="text" id="name" required onChange={onAuthorChange} />
            </p>
        </form>
    );
}
