import {useContext} from "react";
import {SomeContext} from '../../../App'

const UserComponent= () => {
    const UserContext = useContext(SomeContext)
    console.log(UserContext);
    return(
        <>
        </>
    )
}
export default UserComponent;