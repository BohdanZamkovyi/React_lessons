const UserCompany = ({company})=>{
    console.log(company);
    const {name, catchPhrase, bs} = company
    return(
        <div>
            <h3>Company</h3>
            <p>{name}</p>
            <p>{catchPhrase}</p>
            <p>{bs}</p>
        </div>
    )
}
export default UserCompany;