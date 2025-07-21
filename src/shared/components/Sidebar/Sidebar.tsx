import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/tải xuống.png";
import styles from "./Sidebar.module.css";
import { useAuth } from "../../../contexts/AuthContext";

const Sidebar = () => {
    const { logout } = useAuth()
    const location = useLocation()

    const handleLogout = () => {
        const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
        if (confirmed) {
            logout();
        }
    }
    return (
        <>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <nav>
                    <ul className={styles.navbar}>
                        <li className={location.pathname === "/" ? styles.activeOption : ""}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={location.pathname ==="/posts" ? styles.activeOption : ""}>
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li>
                            <a onClick={handleLogout} href="#">Logout</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
