 import styles from './Character.module.css';
const Character = (props) => {
    const {name, id, status, spesies, gender, image} = props;
    return(
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.description}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.description_item}>{id}</p>
                    <p className={styles.description_item}>{status}</p>
                    <p className={styles.description_item}>{spesies}</p>
                    <p className={styles.description_item}>{gender}</p>
                </div>
                <img src={image} alt=""/>
            </div>

        </div>
    )
}

export default Character;