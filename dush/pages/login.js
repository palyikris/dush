import Form from "../components/Form";
import InputField from "../components/InputField";
import UniHead from "../components/UniHead";
import styles from "../styles/LoginPage/style.module.css";
import Button from "../ui/Button"; 
import { useRef } from "react";
import { useRouter } from "next/router"







export default function LoginPage(){

    let email = useRef();
    let password = useRef();

    let router = useRouter();


    function makeToken(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }


    function checkSubmit(){


        // ! get password for user wit given email
        // ! check password
        // ! get userId

        if(email.current.value.includes("@") != true){
            email.current.placeholder = "Please enter a real email"
            email.current.style.border = "2px solid red"
        }
        
        else if(email.current.value.length <= 0){
            email.current.placeholder = "Please enter your email"
            email.current.style.border = "2px solid red"
        }
        else if(password.current.value.length <= 0){
            password.current.placeholder = "Please enter your email"
            password.current.style.border = "2px solid red"
        }
        else{
            let authToken = makeToken(20);


            let users = []
            let currentUser = null

            fetch("https://theonedush-default-rtdb.europe-west1.firebasedatabase.app/users.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                for(let key in data) {
                    let user = {
                        id: key,
                        userData : data[key],
                    }
                    users.push(user);
                }

                console.log(users)

                for(let i = 0; i < users.length; i++) {
                    console.log(users[i])
                    if(users[i].userData.email === email.current.value){
                        currentUser = users[i]
                    }
                }

                if(currentUser != null){
                    if(currentUser.userData.password != password.current.value){
                        email.current.value = ""
                        password.current.value = ""
                        email.current.placeholder = "Wrong email or password"
                        email.current.style.border = "2px solid red"
                        password.current.placeholder = "Wrong email or password"
                        password.current.style.border = "2px solid red"
                    }
                    else{
                        let userId = currentUser.userData.userId
                        const redirect = `/user/${authToken}/${userId}`
                        router.push(redirect)
                    }
                }
                else{
                    email.current.value = ""
                    email.current.placeholder = "No account with this email"
                    email.current.style.border = "2px solid red"
                }
            })
        }


    }
    return(
        <div className={styles.container}>
            <UniHead title="Dush Login Page"></UniHead>
            <form onSubmit={checkSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email address" ref={email} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password"  ref={password} />
                </div>
                <div className={styles.buttons}>
                    <Button text="Back to Home Page" link="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </Button>
                    <button type="button" onClick={checkSubmit}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </form>
            <div className={styles.containerAbsolute}>
                <div className={styles.registrate}>
                    <Button text="Registrate here!" link="/registration"></Button>
                </div>
            </div>
        </div>
    )
}