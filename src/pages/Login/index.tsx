import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    setSuccess(false)

    try {
      await login(username);  // Gọi AuthContext login
      setSuccess(true); // báo thành công
      setTimeout(() => {
        window.location.href = "/"; // Chuyển trang sau 1.5s
      }, 1000);
    } catch (error) {
      console.error(error);
      setErr("Đăng nhập thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.loginWrapper}>
        <h1 className={styles.loginTitle}>Sign In</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button
            className={`button ${styles.buttonLogin}`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          {success && <p style={{ color: "green", marginTop: "10px" }}>Đăng nhập thành công!</p>}
          {err && <p style={{ color: "red", marginTop: "10px" }}>{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
