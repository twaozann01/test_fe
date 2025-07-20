import styles from "./EditPost.module.css";

const EditPost = () => {
    return (
        <>
            <div className={styles.addNewContainer}>
                <h2>Edit Post</h2>
                <form className={styles.addForm}>
                    <label className={styles.titleNew} htmlFor="title">Title</label>
                    <input type="text" id="title" required />
                    
                    <label className={styles.titleNew} htmlFor="description">Description</label>
                    <textarea id="description" rows={3} required defaultValue={""} />

                    <div className={styles.tagContainer}>
                        <p className={styles.titleNew}>Tags</p>
                        <div className={styles.tags}>
                            {["HTML", "CSS", "JavaScript", "React", "Node.js", "TypeScript", "Vue.js", "Angular"].map(tag => (
                                <label key={tag} className={styles.tag}>
                                    <input type="checkbox" name="tags" value={tag} />
                                    {tag}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.formActions}>
                        <button type="submit" className={`button ${styles.submitBtn}`}>Submit</button>
                        <button type="button" className={`button ${styles.cancelBtn}`}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditPost;
