import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../redux/actions/cartActions";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
    navigate("/order-success");
  };

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold">Order Summary</Text>
      {cartItems.map((item) => (
        <Box key={item.id} p={4} borderWidth="1px" mt={2}>
          <Text>{item.title} - {item.quantity} x ${item.price}</Text>
        </Box>
      ))}
      <Text fontSize="xl" fontWeight="bold" mt={4}>Total: ${totalPrice.toFixed(2)}</Text>
      <Button colorScheme="green" mt={4} onClick={handlePlaceOrder}>Place Order</Button>
    </Box>
  );
};

export default Checkout;