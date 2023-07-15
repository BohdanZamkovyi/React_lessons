import './App.css';
import UserContainer from "./components/UserContainer/UserContainer";
import {useState} from "react";
import PostsOfUserContainer from "./components/PostsOfUserContainer/PostsOfUserContainer";


function App() {
    const [ShowPosts, setShowPosts] = useState({status: false, userId: null});
    return (
        <div className="App">
            <UserContainer setShowPosts={setShowPosts}/>
            {ShowPosts.status && <PostsOfUserContainer userId={ShowPosts.userId}/>}
        </div>
    );
}

export default App;
