import styles from './UserComponent.module.css';
const UserComponent = (props) => {
    const {firstName, lastName, age, gender, image} = props;
    console.log(image);
    return(
    <div className={styles.container}>
        <div className={styles.inner_container}>
            <div className={styles.infoOfUser}>
                <h2>{firstName} {lastName}</h2>
                <p className={styles.paragraph}>Вік: {age}</p>
                <p className={styles.paragraph}>Стать: {gender}</p>
            </div>
            <img src={image}/>
        </div>
    </div>
)
}
export default UserComponent;