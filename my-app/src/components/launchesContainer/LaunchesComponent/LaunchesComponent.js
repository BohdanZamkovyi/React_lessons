import styles from './LaunchesComponent.module.css';
const LaunchesComponent = (props)=>{
    const {launch} = props
    console.log(launch)
    return(
        <div className={styles.container}>
            <h3>Назва місії: <span>{launch.mission_name}</span></h3>
            <p>Запуск проведений у {launch.launch_year} році</p>
            <img src={launch.links.mission_patch_small} alt=""/>
        </div>
    )
}
export default LaunchesComponent;