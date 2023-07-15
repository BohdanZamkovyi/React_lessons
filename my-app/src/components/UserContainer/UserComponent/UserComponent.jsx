const UserComponent = ({user, setShowPosts}) => {
    const {name, id} = user;
    return (
        <div>
            <p>Name: {name} Id: {id}</p>
            <button onClick={()=>setShowPosts({status:!setShowPosts.status, userId: id})}>Show Posts</button>
        </div>
    )
}
export default UserComponent;