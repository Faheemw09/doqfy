import apiClient from "./apiClient";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

// Add a new product
export const addProduct = async (product) => {
  try {
    const response = await apiClient.post("/products", product);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add product");
  }
};

// Update an existing product
export const updateProduct = async (_id, product) => {
  try {
    const response = await apiClient.put(`/products/${_id}`, product);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update product");
  }
};

// Delete a product
export const deleteProduct = async (_id) => {
  try {
    await apiClient.delete(`/products/${_id}`);
  } catch (error) {
    throw new Error("Failed to delete product");
  }
};
