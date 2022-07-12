import Form from "../components/Form";
import InputField from "../components/InputField";
import UniHead from "../components/UniHead";
import styles from "../styles/Registration/style.module.css";
import Button from "../ui/Button"; 
import { useRef } from "react";
import { useRouter } from "next/router"







export default function RegistrationPage(){

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
    
            let users = []

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
                    users.push(user)
                }

                console.log(users, users.length)

                for(let i = 0; i < users.length; i++) {
                    if(users[i].userData.email === email.current.value){
                        email.current.value = ""
                        email.current.placeholder = "Email already in use"
                        email.current.style.border = "2px solid red"
                    }
                }
            })

            let authToken = makeToken(20);

            let userId = makeToken(20)

            const redirect = `/user/${authToken}/${userId}`

            let data = {
                userId: userId,
                email: email.current.value,
                password: password.current.value,
            }

            fetch("https://theonedush-default-rtdb.europe-west1.firebasedatabase.app/users.json", 
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            router.push(redirect)
            
        }


    }
    return(
        <div className={styles.container}>
            <UniHead title="Dush Registration Page"></UniHead>
            <form onSubmit={checkSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
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
                    <Button text="Login here!" link="/login"></Button>
                </div>
            </div>
        </div>
    )
}