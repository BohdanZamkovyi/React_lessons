import styles from './LoginPage.module.css';
import {useRef} from "react";

const LoginPage = () => {
    console.log('Render');
    // const [userInfo, setUserInfo] = useState('');
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleClick = (e) => {
        e.preventDefault();
        const userInfo = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(userInfo);
    }
    return (
        <div className={styles.wrapper}>
            <form name='forma' className={styles.form} onSubmit={handleClick}>
                <label>
                    Username
                    <br/>
                    <input name='username' type="text" ref={usernameRef}/>
                </label>
                <label>
                    Email
                    <br/>
                    <input type="email" ref={emailRef}/>
                </label>
                <label>
                    Password
                    <br/>
                    <input type="password" ref={passwordRef}/>
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
export default LoginPage;