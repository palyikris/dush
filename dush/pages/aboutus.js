import UniHead from "../components/UniHead";
import styles from "../styles/AboutPage/style.module.css";
import Container from "../components/Container";



export default function AboutPage(){
    return(
        <div className={styles.container}>
            <UniHead title="Dush About Page - Everything you need to know about Dush"></UniHead>
            <h1>About <span>Dush</span></h1>
            <div className={styles.cubes}>
                <div className={styles.cube}>What is <span className={styles.dush}>Dush</span>?</div>
                <div className={styles.cube}><span className={styles.comp}>How</span> was it created?</div>
            </div>
            <div className={styles.desc}>
                <p>
                    <span className={styles.dush}>Dush is the best tool for planning. </span>
                    Itt supports a wide variety of different features, so that <span className={styles.comp}>You </span>
                    can organize your work, life, basically <span className={styles.comp}>ANYTHING.</span>
                    <br></br>
                    <br></br>
                    <span className={styles.comp}>Registrate</span> yourself and get started!!
                </p>
            </div>
        </div>
    )

}