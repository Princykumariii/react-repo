// import React from "react";
// import TodoList from "./components/TodoList";
// //import TodoPage from "./components/TodoPage";
// const App = ()=>{
//   return(
//     <div>
// <TodoList/>
//       {/* <TodoPage/> */}
//     </div>
//   )
// }

// export default App;
// import React from "react";
// import Navbar from "./components/Navbar";
// import Cart  from "./Pages/Cart"
// import TodoList from "components/TodoList"
// const App = ()=>{
//   return(
//     <div>
//       <Navbar/>
//       <TodoList/>
//       <Cart/>
//     </div>
//   )
// }
// export default App;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
            
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
