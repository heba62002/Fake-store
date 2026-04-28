import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductDetails from "./pages/user/ProductDetails";
import Home from "./pages/user/Home";
import Login from "./pages/Login";
import Cart from "./pages/user/Cart";
import Profile from "./pages/user/Profile";

import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import Users from "./pages/admin/Users";
import Landing from "./pages/Landing";

import AdminRoute from "./Components/AdminRoute";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Landing فقط للزائر */}
        <Route path="/" element={<Landing />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />


         <Route
          path="/products"
          element={
          
              <Home />
            
          }
        />
        {/* User Routes */}
       

        <Route
          path="/cart"
          element={
         
              <Cart />
            
          }
        />

        <Route
          path="/profile"
          element={
            <Profile />
          }
        />

        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/add"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/edit/:id"
          element={
            <AdminRoute>
              <EditProduct />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;