import axios from "axios";

const axiosOrders = axios.create({
  baseURL: "https://burger-restaurant-a840e-default-rtdb.firebaseio.com/",
});

export default axiosOrders;
