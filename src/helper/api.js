import axios from "axios";
const instance = axios.create({
    baseURL: 'https://profile-server-wine.vercel.app' // Replace with your desired localhost server URL
  });
export default instance;
