// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTodos, deleteTodo } from "../redux/actions/todoActions";
// import { Box, Button, List, ListItem, Spinner, Text } from "@chakra-ui/react";

// const TodoPage = () => {
//   const dispatch = useDispatch();
//   const { todos, loading, error } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   return (
//     <Box>
//       <Text fontSize="2xl" textAlign="center" mb={4}>Todo List</Text>
//       {loading && <Spinner />}
//       {error && <Text color="red.500">{error}</Text>}
//       <List spacing={3}>
//         {todos.map((todo) => (
//           <ListItem key={todo.id} display="flex" justifyContent="space-between">
//             <Text>{todo.title}</Text>
//             <Button colorScheme="red" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default TodoPage;
