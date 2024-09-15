// Basic validation for product form
export const validateProduct = (product) => {
  const errors = {};
  if (!product.name) errors.name = "Name is required";
  if (!product.description) errors.description = "Description is required";
  if (!product.price || product.price <= 0)
    errors.price = "Price must be greater than 0";
  if (!product.image) errors.image = "Image URL is required";
  return errors;
};
