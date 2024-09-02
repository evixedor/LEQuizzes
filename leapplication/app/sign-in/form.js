'use client'

import Link from "next/link"
import styles from "../styles/sign-in.module.css"


export default function Form() {
    return (
        <main>
            <form>
                <div className={styles.div1}>Welcome to Launch English !!</div>
                <input type="text" className={styles.input1} placeholder="Email" required/>
                <input type="password" className={styles.input2} placeholder="Password" required/>
                <div className={styles.div2}>
                    <span>Forgot Password?  </span>
                    <Link href="/" className={styles.div2child}>Reset</Link>
                </div>
                <button type="submit" className={styles.loginbutton}>Sign In</button>
                <Link href="/" className={styles.createaccount}>Don"t have an account? Sign Up</Link>
            </form>
        </main>
    )
}