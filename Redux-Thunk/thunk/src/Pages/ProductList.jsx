import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { Box, Grid, Image, Button, Text } from "@chakra-ui/react";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
      {products.map((product) => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" p={4}>
          <Image src={product.image} alt={product.title} boxSize="150px" mx="auto" />
          <Text mt={2} fontWeight="bold">{product.title}</Text>
          <Text>${product.price}</Text>
          <Button mt={2} colorScheme="blue" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </Box>
      ))}
    </Grid>
  );
};

export default ProductList;
