import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.loginWrapper}>
        <h1 className={styles.loginTitle}>Sign In</h1>
        <form className={styles.loginForm}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
          <button className={`button ${styles.buttonLogin}`} type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
