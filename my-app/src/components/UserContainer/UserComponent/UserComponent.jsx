import UserDetails from "./UserDetails/UserDetails";
import UserAdress from "./UserAdress/UserAdress";
import UserCompany from "./UserCompany/UserCompany";

const UserComponent = ({user}) => {
    return(
        <div>
            <UserDetails user={user}/>
            <UserAdress address={user.address}/>
            <UserCompany company={user.company}/>
        </div>
    )
}
export default UserComponent;