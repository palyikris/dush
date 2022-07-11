import styles from "../styles/HomePage/style.module.css";
import Head from "next/head";
import UniHead from "../components/UniHead"
import Link from "next/link";


function HomePage() {
    
    return(
        <div>
            <UniHead title="Dush - Main page for Dush"></UniHead>
            <div className={styles.topnav}>
                <Link href="/login">
                  <a href="">Login</a>
                </Link>
                <div>or</div>
                <Link href="/registration">
                  <a href="">Registrate</a>
                </Link>
            </div>
            <div className={styles.containerDiff}>
              <div className={styles.fancyBorder}>
                  Plan your life with us.
              </div>
              <ul>
                <li className={styles.firstOfNav}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                  <Link href="/aboutus">
                      <a>About us</a>
                  </Link>
                </li>
                <li className={styles.secondOfNav}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <Link href="/convincer">
                      <a href="">Why Dush?</a>
                  </Link>
                </li>
                <li className={styles.thirdOfNav}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <Link href="/tutorial">
                      <a href="">Tutorial</a>
                  </Link>
                </li>
                <li className={styles.fourthOfNav}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                  <Link href="/contact">
                      <a href="">Contact us</a>
                  </Link>
                </li>
                <li className={styles.fifthOfNav}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <Link href="/information">
                      <a href="">Useful to know</a>
                  </Link>
                </li>
              </ul>
              <div className={styles.fancyBorderOther}>
                  Project-oriented thinking.
              </div> 
            </div>
            <div className={styles.container}>
              <h1><span>Dush</span></h1>
              <h3>Planning is our passion</h3>
            </div>
        </div>
    )
}

export default HomePage;