import UserComponent from "./UserComponent/UserComponent";
import styles from './UserContainer.module.css';

const UserContainer = ({user}) => {
    return(
        <div className={styles.wrapper}>
            <UserComponent user={user}/>
        </div>
    )
}
export default UserContainer;