import Form from "../components/Form";
import InputField from "../components/InputField";
import UniHead from "../components/UniHead";
import styles from "../styles/LoginPage/style.module.css";
import Button from "../components/Button";





export default function LoginPage(){
    function checkSubmit(){
        console.log("Checking")
    }
    return(
        <div className={styles.container}>
            <UniHead title="Dush Login Page"></UniHead>
            <form onSubmit={checkSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <InputField label="Email" inputType="email" inputPlaceholder="Enter your email address" className={styles.InputField}></InputField>
                <InputField label="Password" inputType="password" inputPlaceholder="Enter your password" className={styles.InputField}></InputField>
                <div className={styles.buttons}>
                    <button onClick={checkSubmit}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </button>
                    <Button text="Confirm" link="/" className={styles.confirm} onClick={checkSubmit}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Button>
                </div>
            </form>
        </div>
    )
}