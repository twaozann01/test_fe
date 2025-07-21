import { useEffect, useState } from "react";
import Api from "../../services/Api";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Lấy danh sách tags từ API khi component load
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

  const handleTagChange = (tag: string, checked: boolean) => {
    setSelectedTags((prev) =>
      checked ? [...prev, tag] : prev.filter((t) => t !== tag)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
      title,
      description,
      tags: selectedTags,
    };

    try {
      // Gọi API tạo bài viết (nếu API yêu cầu data trong body)
      const res = await Api.createNewPost(postData);
      console.log("Tạo bài viết thành công:", res.data);
      alert("Tạo bài viết thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      alert("Tạo bài viết thất bại!");
    }
  };

  return (
    <div className={styles.addNewContainer}>
      <h2>Add New Post</h2>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <label className={styles.titleNew} htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className={styles.titleNew} htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Render tags từ API */}
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
          <button type="submit" className={`button ${styles.submitBtn}`}>Submit</button>
          <button
            type="button"
            className={`button ${styles.cancelBtn}`}
            onClick={() => {
              setTitle("");
              setDescription("");
              setSelectedTags([]);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
