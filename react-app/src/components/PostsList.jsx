import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";

export default function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={styles.posts}>
                <Post author="Max" body="React.js is Hell!" />
                <Post author="Manuel" body="Check out" />
            </ul>
        </>
    );
}
