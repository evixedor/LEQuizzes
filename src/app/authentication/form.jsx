"use client";

import { useState } from "react";

import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,

} from "../utils/firebase/firebase.utils";
import Link from "next/link";
import styles from "../sign-in-styles/sign-in.module.css";

const defaultFormFields = {
  email: '',
  password: '',
};

export default function Form() {

	const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
	

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
		
	};

	const handleSubmit = async (event) => {
    event.preventDefault();

    try {
			const { user } = await signInAuthUserWithEmailAndPassword(email, password);
			
      resetFormFields();
    } catch (error) {
			console.log('user sign in failed', error);
		}
  };
 

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<div className={styles.div1}>Welcome to Launch English !!</div>
					<input
					name="email"
					value={email}
					type="email"
					className={styles.input1}
					placeholder="Email"
					onChange={handleChange}
					required
				/>
				<input
					name="password"
					value={password}
					type="password"
					className={styles.input2}
					placeholder="Password"
					onChange={handleChange}
					required
				/>

				<div className={styles.div2}>
					<span>Forgot Password? </span>
					<Link href="#" onClick={handleChange} className={styles.div2child}>
						Reset
					</Link>
				</div>
				<div className={styles.buttonscontainer}>
					<button type="submit" className={styles.loginbutton}>
						Sign In
					</button>
					<button type="button" onClick={signInWithGoogle} className={styles.loginbutton}>
						Sign In with Google
					</button>
				
				</div>
				
				<Link href="/sign-up" className={styles.createaccount}>
					Don"t have an account? Sign Up
				</Link>
			</form>
		</main>
	);
};

