import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { addProduct, updateProduct } from "../services/ProductServices";
import { validateProduct } from "../utils/Validation";
import { showError } from "../utils/errorHandler";

function ProductForm({ currentProduct, onSave }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name);
      setDescription(currentProduct.description);
      setPrice(currentProduct.price);
      setImage(currentProduct.image);
    }
  }, [currentProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateProduct({
      name,
      description,
      price,
      image,
    });
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (currentProduct) {
        await updateProduct(currentProduct._id, {
          name,
          description,
          price,
          image,
        });
      } else {
        await addProduct({ name, description, price, image });
      }
      onSave();
      setName("");
      setDescription("");
      setPrice("");
      setImage("");
      setErrors({});
    } catch (error) {
      showError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">
        {currentProduct ? "Edit Product" : "Add Product"}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
            error={!!errors.description}
            helperText={errors.description}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            required
            error={!!errors.price}
            helperText={errors.price}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            fullWidth
            error={!!errors.image}
            helperText={errors.image}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ProductForm;
