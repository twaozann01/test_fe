/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../services/Api";
import styles from "./EditPost.module.css";

const EditPost = () => {
  const { id } = useParams<{ id: string }>(); // Lấy ID từ URL
  const navigate = useNavigate();

  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await Api.getTags();
        setTags(res.data || []);
      } catch (error) {
        console.error("Lỗi khi lấy tags:", error);
      }
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await Api.getPosts(); 
        const post = res.data.posts?.find((p: any) => p.id === id);
        if (post) {
          setTitle(post.title);
          setDescription(post.description);
          setSelectedTags(post.tags || []);
        }
      } catch (error) {
        console.error("Lỗi khi lấy post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleTagChange = (tag: string, checked: boolean) => {
    setSelectedTags((prev) =>
      checked ? [...prev, tag] : prev.filter((t) => t !== tag)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const postData = { title, description, tags: selectedTags };
    try {
      await Api.editPost(id as string, postData); 
      alert("Cập nhật thành công!");
      navigate("/posts");
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
    }
  };

  return (
    <div className={styles.addNewContainer}>
      <h2>Edit Post</h2>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <label className={styles.titleNew} htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className={styles.titleNew} htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={3}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Hiển thị danh sách tags */}
        <div className={styles.tagContainer}>
          <p className={styles.titleNew}>Tags</p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <label key={tag} className={styles.tag}>
                <input
                  type="checkbox"
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={(e) => handleTagChange(tag, e.target.checked)}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={`button ${styles.submitBtn}`}>Save</button>
          <button type="button" className={`button ${styles.cancelBtn}`} onClick={() => navigate("/posts")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
