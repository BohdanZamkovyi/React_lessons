const UserAdress = ({address}) => {
    const {street, suite, city} = address
    return (
        <div>
            <h3>Adress</h3>
            <p>City: {city}</p>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
        </div>
    )
}
export default UserAdress;