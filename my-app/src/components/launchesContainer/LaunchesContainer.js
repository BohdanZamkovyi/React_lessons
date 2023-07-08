import LaunchesComponent from "./LaunchesComponent/LaunchesComponent";
import {useEffect, useState} from "react";

const LaunchesContainer = ()=>{
    const [launches, setLaunches] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(launches => setLaunches(launches))
    }, [])

    const filterLaunches = [...launches].filter((launch) => launch.launch_year !== '2020');
    return (
        <>
            {filterLaunches.map((launch, id)=>{
                    return <LaunchesComponent key={id} launch={launch}/>
                })}
        </>
   )
}
export default LaunchesContainer;