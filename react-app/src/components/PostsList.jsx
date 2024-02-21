import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import styles from './PostsList.module.css';

export default function PostsList({ isPosting, onModalIsVisible }) {
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    function handleBodyChange(e) {
        setBody(e.target.value);
    }

    function handleAuthorChange(e) {
        setAuthor(e.target.value);
    }

    return (
        <>
            {isPosting && (
                <Modal onModalIsVisible={onModalIsVisible}>
                    <NewPost
                        onBodyChange={handleBodyChange}
                        onAuthorChange={handleAuthorChange}
                    />
                </Modal>
            )}
            <ul className={styles.posts}>
                <Post author={author} body={body} />
                <Post author="Ikaman" body="아아" />
            </ul>
        </>
    );
}
