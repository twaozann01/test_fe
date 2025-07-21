import Http from "./Http";

const Api = {
  login: (username: string) => {
    return Http.post("/auth/login", { username });
  },

  refreshToken: (refreshToken: string) => {
    return Http.post("/auth/refresh-token", { refreshToken });
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },

  getGalleries: () => {
    return Http.get("/galleries");
  },

  getTags: () => {
    return Http.get("/posts/tags");
  },

  getPosts: (page?: number, title?: string, tags?: string[]) => {
    return Http.get("/posts", {
      params: {
        page,
        title,
        tags: tags?.join(",") 
      }
    });
  },

  createNewPost: (data: { title: string; description: string; tags: string[] }) => {
    return Http.post("/posts", data);
  },

  editPost: (id: string, data: { title: string; description: string; tags: string[] }) => {
    return Http.patch(`/posts/${id}`, data);
  },

  deletePost: (id: string) => {
    return Http.delete(`/posts/${id}`);
  },
};

export default Api;
