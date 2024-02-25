import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import styles from './PostsList.module.css';
import { useState } from 'react';

export default function PostsList({ isPosting, onModalIsVisible }) {
    const [posts, setPosts] = useState([]);

    function handleAddPost(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onModalIsVisible={onModalIsVisible}>
                    <NewPost
                        onCancel={onModalIsVisible}
                        onAddPost={handleAddPost}
                    />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.body}
                            author={post.author}
                            body={post.body}
                        />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}
