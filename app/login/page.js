'use client'

import styles from "./page.module.css";
import { useRef } from 'react';

export default function Login() {
    const login = useRef(null);
    const password = useRef(null);

    function sessionInit() {
        fetch('/api/instagram', {headers: {'login' : login.current.value, 'password' : password.current.value}})
            .then(data => data.json())
            .then(json => console.log(json));
    }

    return(
        <div className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <div className={styles.loginTitle}>
                    Login
                </div>
                <input
                    className={styles.loginInput}
                    type="text"
                    name="login"
                    autoFocus
                    ref={login}
                />
                <input
                    className={styles.loginInput}
                    type="password"
                    name="password"
                    ref={password}
                />
                <button
                    className={styles.loginButton}
                    onClick={sessionInit}
                >
                    Entrar
                </button>
                <div className={styles.loginInstructions}>
                    Entre com suas credenciais do Instagram
                </div>
            </div>
        </div>
    );
}