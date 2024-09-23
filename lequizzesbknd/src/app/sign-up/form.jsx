"use client";

import styles from "../sign-in-styles/sign-in.module.css";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils.js";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function Form() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user)

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
 
  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

 

	return (
		<main>
			<form onSubmit={handleSubmit}>
				
				<div className={styles.div1}>Welcome to Launch English !! {<br/>}Sign up with email and password.</div>

				<input
          name="displayName"
          value={displayName}
					type="text"
					className={styles.input1}
					placeholder="Display Name"
          onChange={handleChange}
					required
				/>
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
				<input
          name="confirmPassword"
          value={confirmPassword}
					type="password"
					className={styles.input2}
					placeholder="Confirm Password"
          onChange={handleChange}
					required
				/>
				<button type="submit" className={styles.loginbutton}>
					Sign Up
				</button>
			</form>
		</main>
	);
}
