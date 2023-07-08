import styles from '../PostComponent.module.css'
const LoadingMoreInfo = (props)=>{
    const {post} = props;
    return(
        <div className={styles.body_post}>
            <p>Author {post.userId}</p>
            <p>{post.body}</p>
        </div>
    )
}
export default LoadingMoreInfo;