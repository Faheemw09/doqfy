import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { deleteProduct } from "../services/ProductServices";
import { showError } from "../utils/errorHandler";

function ProductList({ products, onEdit, onRefresh }) {
  console.log(products);
  const handleDelete = async (_id) => {
    try {
      await deleteProduct(_id);
      onRefresh();
    } catch (error) {
      showError(error.message);
    }
  };

  return (
    <>
      {/* Grid for displaying the product cards */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card key={product.id} sx={{ width: "100%" }} spacing>
              {product.image && (
                <CardMedia
                  component="img"
                  height="100"
                  image={product.image}
                  alt={product.name}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  ${product.price}
                </Typography>
              </CardContent>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "16px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => onEdit(product)}
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#1976d2",
                    color: "#fff",
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(product._id)}
                  style={{
                    padding: "4px 8px",
                    borderColor: "#d32f2f",
                    color: "#d32f2f",
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;
