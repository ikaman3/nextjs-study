import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";

export default function PostsList() {
    const [text, setText] = useState("");

    function changeBodyHandler(e) {
        setText(e.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} />
            <ul className={styles.posts}>
                <Post author="Max" body="React.js is Hell!" />
                <Post author="Manuel" body="Check out" />
            </ul>
        </>
    );
}
