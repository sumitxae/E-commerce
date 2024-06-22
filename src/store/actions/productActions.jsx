export { setProducts } from "../reducers/productSlice";
import axios from "axios";
import { setProducts } from "../reducers/productSlice";

const fetchProducts = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/products`,
      // 'http://localhost:3000/products'
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    const data = response.data;
    dispatch(setProducts(data));
  } catch (error) {
    console.log(error);
  }
};

export { fetchProducts };
