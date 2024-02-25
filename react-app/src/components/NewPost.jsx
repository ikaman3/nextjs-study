import styles from './NewPost.module.css';

export default function NewPost({ onBodyChange, onAuthorChange, onCancel }) {
    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="body">Body</label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea
                    type="text"
                    id="name"
                    required
                    onChange={onAuthorChange}
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
