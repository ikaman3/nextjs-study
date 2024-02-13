// classes or style 원하는 이름으로
import classes from "./Post.module.css";

function Post({ author, body }) {
    return (
        <div className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </div>
    );
}

export default Post;
