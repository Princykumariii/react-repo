import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions/cartActions";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Shopping Cart</Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        cartItems.map((item) => (
          <Flex key={item.id} justify="space-between" align="center" p={4} borderWidth="1px">
            <Text>{item.title}</Text>
            <Input
              type="number"
              width="60px"
              value={item.quantity}
              onChange={(e) => dispatch(updateQuantity(item.id, Number(e.target.value)))}
            />
            <Text>${item.price * item.quantity}</Text>
            <Button colorScheme="red" onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
          </Flex>
        ))
      )}
      {cartItems.length > 0 && (
        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold">Total: ${totalPrice.toFixed(2)}</Text>
          <Link to="/checkout">
            <Button colorScheme="green" mt={2}>Proceed to Checkout</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
