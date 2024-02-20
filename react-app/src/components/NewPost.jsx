import styles from "./NewPost.module.css";
import { useState } from "react";

export default function NewPost({ text, onBodyChange }) {
    const [name, setName] = useState("");

    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>
            <p>{text}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type="text" id="name" required />
            </p>
        </form>
    );
}
