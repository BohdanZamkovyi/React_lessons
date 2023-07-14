import './App.css';
import {useEffect, useState} from "react";
import UserContainer from "./components/UserContainer/UserContainer";

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])
    return (
        <div className="App">
            {users.map((user)=><UserContainer user={user} key={user.id}/>)}
        </div>
    );
}

export default App;
