import { useState } from 'react';

import styles from './NewPost.module.css';

export default function NewPost({ onCancel, onAddPost }) {
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    function handleBodyChange(e) {
        setBody(e.target.value);
    }

    function handleAuthorChange(e) {
        setAuthor(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const postData = {
            body: body,
            author: author,
        };
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <p>
                <label htmlFor="body">Body</label>
                <textarea
                    id="body"
                    required
                    rows={3}
                    onChange={handleBodyChange}
                />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea
                    type="text"
                    id="name"
                    required
                    onChange={handleAuthorChange}
                />
            </p>
            <p className={styles.actions}>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
}
