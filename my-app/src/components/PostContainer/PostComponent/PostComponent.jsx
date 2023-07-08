import styles from './PostComponent.module.css';
import {useState} from "react";
import LoadingMoreInfo from "./LoadingMoreInfo/LoadingMoreInfo";
const PostComponent = (props)=>{
    const {post} = props;
    console.log(post.title)
    const [isShow, setIsShow] = useState(false);
    return(
       <div className={styles.wrapper_post}>
            <div className={styles.header_post}>
                 <h3>Id:{post.id} Title: {post.title}</h3>
            </div>
           <button onClick={()=>setIsShow(!isShow)} className={styles.btnShow}>{isShow ? 'Hide' : 'Show'}</button>
           {isShow && <LoadingMoreInfo post={post}/>}
       </div>
    )
}
export default PostComponent;