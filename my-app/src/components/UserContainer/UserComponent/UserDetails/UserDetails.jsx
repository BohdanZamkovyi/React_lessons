const UserDetails = ({user}) => {
    const {id, name, username, email, phone, website} = user
    return(
        <div>
            <h3>Details</h3>
            <p>ID: {id} Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email} phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}
export default UserDetails;