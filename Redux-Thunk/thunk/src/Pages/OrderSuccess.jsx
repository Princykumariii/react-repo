import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <Box textAlign="center" p={6}>
      <Text fontSize="2xl" fontWeight="bold">Order Placed Successfully!</Text>
      <Text mt={2}>Thank you for your purchase.</Text>
      <Link to="/">
        <Button mt={4} colorScheme="blue">Back to Products</Button>
      </Link>
    </Box>
  );
};

export default OrderSuccess;
