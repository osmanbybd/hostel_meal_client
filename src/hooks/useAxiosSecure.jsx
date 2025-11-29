import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../Context/useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },

      async (error) => {
        console.log("Response error:", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, logOutUser]);

  return axiosSecure
};

export default useAxiosSecure;
