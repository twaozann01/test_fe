import { Link } from "react-router-dom";
import styles from "./Posts.module.css";

const Posts = () => {
    return (
        <>
            <div className={styles.topBar}>
                <Link to="create" className="button">Add new</Link>
                <div className={styles.searchGroup}>
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="Tags" />
                </div>
            </div>
            <table className={styles.postTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Tags</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ABC</td>
                        <td>Description</td>
                        <td>HTML, CSS</td>
                        <td>
                            <Link to={`edit/${"45651331"}`}>
                                <i className={`fas fa-pen-to-square ${styles.editIcon}`} />
                            </Link>
                            <i className={`fas fa-trash ${styles.deleteIcon}`} />
                        </td>

                    </tr>
                </tbody>
            </table>
            <div className={styles.pagination}>
                <button className={`${styles.pageBtn} ${styles.disabled}`}>«</button>
                <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                <button className={styles.pageBtn}>2</button>
                <button className={styles.pageBtn}>3</button>
                <button className={styles.pageBtn}>4</button>
                <button className={styles.pageBtn}>5</button>
                <button className={styles.pageBtn}>»</button>
            </div>
        </>
    );
};

export default Posts;
