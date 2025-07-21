import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/tải xuống.png';
import styles from './Header.module.css';
import { useAuth } from '../../../contexts/AuthContext';

const Header = () => {
    const { isLoggedIn, logout } = useAuth()
    const location = useLocation()

    const handleLogout = () => {
        const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
        if (confirmed) {
            logout();
        }
    }
    return (
        <>
            {/* Header */}
            <div className={styles.containerHeader}>
                <div className={styles.headerImg}>
                    <Link to="/">
                        <img src={logo} alt="#" />
                    </Link>
                </div>
                <ul className={styles.headerButton}>
                    {!isLoggedIn && location.pathname !== "/login" && (
                        <li className="button">
                            <Link to="login" className={styles.headerButtonLogin}>Sign In</Link>
                        </li>
                    )}
                    {
                        isLoggedIn && (
                            <>
                                <li className={`button ${styles.headerLogged}`}>
                                    <Link to="posts" className={styles.buttonProfile}>Profile</Link>
                                </li>
                                <li onClick={handleLogout} className={`button ${styles.headerLogged}`}>
                                    <a href="#" className={styles.buttonLogout}>Logout</a>
                                </li>
                                <li className={styles.headerBar}>
                                    <a href="#"><i className="fa-solid fa-bars" /></a>
                                    <ul className={styles.headerMenu}>
                                        <li>
                                            <Link to="posts">
                                                <i className="fa-regular fa-circle-user icon" />
                                                <span>Profile</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#" onClick={handleLogout}>
                                                <i className="fa-solid fa-right-from-bracket icon" />
                                                <span>Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                            </>
                        )}
                </ul>
            </div>
        </>
    );
};

export default Header;
