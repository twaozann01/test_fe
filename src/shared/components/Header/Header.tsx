import { Link } from 'react-router-dom';
import logo from '../../../assets/images/tải xuống.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            {/* Header */}
            <div className={styles.containerHeader}>
                <div className={styles.headerImg}>
                    <Link to="/">
                    <img src={logo} alt="#" />
                    </Link>
                </div>
                <ul className={styles.headerButton}>
                    <li className="button">
                        <Link to="login" className={styles.headerButtonLogin}>Sign In</Link>
                    </li>
                    <li className={`button ${styles.headerLogged}`}>
                        <Link to="posts" className={styles.buttonProfile}>Profile</Link>
                    </li>
                    <li className={`button ${styles.headerLogged}`}>
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
                                <a href="#">
                                    <i className="fa-solid fa-right-from-bracket icon" />
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
