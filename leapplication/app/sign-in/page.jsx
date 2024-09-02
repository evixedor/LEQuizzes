import Image from "next/image"
import illustration from "../img/Sign-In-illustration.png"
import Link from "next/link"
import styles from "../styles/sign-in.module.css"
import Form from "./form"

export default function About() {
    return (
        <main className={styles.signin}>
        <section className={styles.section1}>
           <Image
          src={illustration}
          alt="Illustration"
          placeholder="blur"
          className={styles.img}
        />
            <h1 className={styles.h1text}>Account Sign In</h1>
            <div className={styles.div1text}>Enter your User Login details to access</div>
            <div className={styles.div2text}>your user dashboard</div>
            <Link href="/" className={styles.homebutton}>Back to Home</Link>
            <div className={styles.bottomtext}>©  2024 Launch English</div>
        </section>
        <section className={styles.section2}>
            <Form />
        </section>
        </main>
    )
}