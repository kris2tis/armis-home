import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  withCredentials: true,
});

app.interceptors.response.use(
  (res) => res,
  async (rej) => {
    if (rej.status === 401 && !rej?.retry) {
      try {
        rej.retry = true;
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/refresh-token`,
          { method: "GET", credentials: "include" }
        );

        if (data?.user) return app(rej.config);
      } catch (error) {
        return Promise.reject(rej);
      }
    } else {
      {
        return Promise.reject(rej);
      }
    }
  }
);

export const http = {
  get: app.get,
  post: app.post,
  patch: app.patch,
  put: app.put,
  delete: app.delete,
};
