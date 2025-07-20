import logo from "../../../assets/images/tải xuống.png";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li className={styles.activeOption}><a href="#">Home</a></li>
                        <li><a href="#">Posts</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
