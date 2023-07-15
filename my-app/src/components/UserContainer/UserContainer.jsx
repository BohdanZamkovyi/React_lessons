import {useEffect, useState} from "react";
import UserComponent from "./UserComponent/UserComponent";

const UserContainer = ({setShowPosts}) => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setUsers(users));
    }, [])
    return (
        <div>
            {users.map((user)=><UserComponent
                key={user.id}
                user={user}
                setShowPosts={setShowPosts}
            />)}
        </div>
    )
}
export default UserContainer;