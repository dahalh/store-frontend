import axios from "axios";

const rootUrlAPI = "https://fakestoreapi.com";
const productEP = rootUrlAPI + "/products";

const apiProcessor = async ({ method, url }) => {
  try {
    const { data } = await axios({
      method,
      url,
    });
    return data;
  } catch (error) {
    let message = error.message;
    console.log(message);
  }
};

export const getAllProducts = (async) => {
  const url = productEP;
  return apiProcessor({ method: "get", url });
};

export const getProductById = async (id) => {
  const url = productEP + "/" + "id";
  return apiProcessor({ method: "get", url });
};

// cart
