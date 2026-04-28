// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const { token, role, logout } = useAuth();
//   const { cart } = useCart();

//   return (
//     <nav style={{ display: "flex", gap: "10px" }}>
//       <Link to="/">Home</Link>

//       {token && role === "user" && (
//         <>
//           <Link to="/cart">Cart ({cart.length})</Link>
//           <Link to="/profile">Profile</Link>
//         </>
//       )}

//       {token && role === "admin" && (
//         <>
//           <Link to="/admin">Dashboard</Link>
//           <Link to="/admin/add">Add Product</Link>
//           <Link to="/admin/users">Users</Link>
//         </>
//       )}

//       {!token ? (
//         <Link to="/login">Login</Link>
//       ) : (
//         <button onClick={logout}>Logout</button>
//       )}
//     </nav>
//   );
// }

// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useCart } from "../context/CartContext";
// import "./navbar.css";

// export default function Navbar() {
//   const { token, role, logout } = useAuth();
//   const { cart } = useCart();

//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <Link to="/" className="logo">🛍 Store</Link>
//       </div>

//       <div className="nav-links">
//         {token && role === "user" && (
//           <>
//             <Link to="/products">Products</Link>
//             <Link to="/cart">Cart ({cart.length})</Link>
//             <Link to="/profile">Profile</Link>
//           </>
//         )}

//         {token && role === "admin" && (
//           <>
//             <Link to="/products">Products</Link>
//             <Link to="/admin">Dashboard</Link>
//             <Link to="/admin/add">Add Product</Link>
//             <Link to="/admin/users">Users</Link>
//           </>
//         )}

//         {!token ? (
//           <Link to="/login" className="login-btn">Login</Link>
//         ) : (
//           <button onClick={logout} className="logout-btn">Logout</button>
//         )}
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./navbar.css";

export default function Navbar() {
  const { token, role, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Taya Store</Link>
      </div>

      <div className="nav-links">
        {/* روابط المستخدم العادي */}
        {token && role === "user" && (
          <>
            <Link to="/products">Shop</Link>
            <Link to="/cart">
              Cart <span className="cart-count">{cart.length}</span>
            </Link>
            <Link to="/profile">Profile</Link>
          </>
        )}

        {/* روابط الآدمن */}
        {token && role === "admin" && (
          <>
            <Link to="/products">Inventory</Link>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/add">New Product</Link>
            <Link to="/admin/users">Users</Link>
          </>
        )}

        {/* التحكم بتسجيل الدخول */}
        {!token ? (
          <Link to="/login" className="login-btn">Login</Link>
        ) : (
          <button onClick={logout} className="logout-btn">Logout</button>
        )}
      </div>
    </nav>
  );
}