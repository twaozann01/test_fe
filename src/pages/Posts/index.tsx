/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../services/Api";
import styles from "./Posts.module.css";

interface Post {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await Api.getPosts(page, title, tags ? tags.split(",") : []);
      setPosts(res.data.posts || []);
      setPage(res.data.current_page || 1);
      setTotalPage(res.data.total_page || 1);
    } catch (err) {
      console.error("Lỗi load posts", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleSearch = () => {
    setPage(1); // Reset về trang đầu khi search
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc muốn xóa bài viết này?")) return;
    try {
      await Api.deletePost(id);
      // Nếu xóa hết bài trong trang hiện tại, lùi về trang trước (nếu có)
      if (posts.length === 1 && page > 1) {
        setPage(page - 1);
      } else {
        fetchPosts();
      }
    } catch (err) {
      alert("Xóa thất bại.");
      console.log(err)
    }
  };

  return (
    <>
      <div className={styles.topBar}>
        <Link to="create" className="button">
          Add new
        </Link>
        <div className={styles.searchGroup}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <button className="button" onClick={handleSearch}>
            Search
          </button>
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
          {posts.length === 0 ? (
            <tr>
              <td colSpan={5}>Không có bài viết nào.</td>
            </tr>
          ) : (
            posts.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>{post.tags.join(", ")}</td>
                <td>
                  <Link to={`edit/${post.id}`}>
                    <i className={`fas fa-pen-to-square ${styles.editIcon}`} />
                  </Link>
                  <i
                    className={`fas fa-trash ${styles.deleteIcon}`}
                    onClick={() => handleDelete(post.id)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button
          className={`${styles.pageBtn} ${page === 1 ? styles.disabled : ""}`}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          «
        </button>

        {[...Array(totalPage)].map((_, idx) => (
          <button
            key={idx + 1}
            className={`${styles.pageBtn} ${page === idx + 1 ? styles.active : ""}`}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}

        <button
          className={`${styles.pageBtn} ${page === totalPage ? styles.disabled : ""}`}
          onClick={() => setPage((p) => Math.min(totalPage, p + 1))}
          disabled={page === totalPage}
        >
          »
        </button>
      </div>
    </>
  );
};

export default Posts;
