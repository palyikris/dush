import Form from "../components/Form";
import InputField from "../components/InputField";
import UniHead from "../components/UniHead";
import styles from "../styles/LoginPage/style.module.css"





export default function LoginPage(){
    function checkSubmit(){
        
    }
    return(
        <div className={styles.container}>
            <UniHead title="Dush Login Page"></UniHead>
            <form onSubmit={checkSubmit}>
                <h1>Login</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <InputField label="Email" inputType="email" inputPlaceholder="Enter your email address" className={styles.InputField}></InputField>
                <InputField label="Password" inputType="password" inputPlaceholder="Enter your password" className={styles.InputField}></InputField>
            </form>
        </div>
    )
}