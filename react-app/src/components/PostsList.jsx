import { useState, useEffect } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import styles from './PostsList.module.css';

export default function PostsList({ isPosting, onModalIsVisible }) {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

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
            {!isFetching && posts.length > 0 && (
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
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading posts...</p>
                </div>
            )}
        </>
    );
}
