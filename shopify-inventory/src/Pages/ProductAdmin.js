import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { fetchProducts } from "../services/ProductServices";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    loadProducts();
  }, []);

  const handleEdit = (product) => {
    setCurrentProduct(product);
  };

  const handleSave = async () => {
    try {
      const updatedProducts = await fetchProducts();
      setProducts(updatedProducts);
      setCurrentProduct(null);
    } catch (error) {
      console.error("Failed to update product list:", error);
    }
  };

  return (
    <Container>
      <Box mb={4}>
        <Typography variant="h4">Product Admin</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={products.length === 0 ? 12 : 4}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <ProductForm currentProduct={currentProduct} onSave={handleSave} />
          </Paper>
        </Grid>
        {products.length > 0 && (
          <Grid item xs={12} md={8}>
            <Paper elevation={3} style={{ padding: "16px" }}>
              <Typography variant="h6">Product List</Typography>
              <ProductList
                products={products}
                onEdit={handleEdit}
                onRefresh={handleSave}
              />
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default ProductAdmin;
