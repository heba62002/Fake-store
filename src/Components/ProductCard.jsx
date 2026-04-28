
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import { deleteProduct, updateProduct } from "../services/api";

// export default function ProductCard({ product, onDelete, onUpdate }) {
//   const { addToCart } = useCart();
//   const { role, token } = useAuth();

//   // 🧪 Debug (احذفه بعد ما تتأكد)
//   console.log("ROLE:", role);

//   const handleDelete = async () => {
//     if (role !== "admin") return;

//     await deleteProduct(product.id);
//     onDelete && onDelete(product.id);
//   };

//   const handleUpdate = async () => {
//     if (role !== "admin") return;

//     const updated = {
//       ...product,
//       title: product.title + " (Updated)",
//     };

//     await updateProduct(product.id, updated);
//     onUpdate && onUpdate(updated);
//   };

//   return (
//     <div style={{ width: "200px", border: "1px solid #ccc", padding: "10px" }}>
//       <img src={product.image} alt={product.title} style={{ width: "100px" }} />

//       <h4>{product.title}</h4>
//       <p>${product.price}</p>

//       <Link to={`/product/${product.id}`}>View</Link>

//       <br />

//       {/* 👤 فقط user أو admin */}
//       {token && (
//         <button onClick={() => addToCart(product)}>
//           Add to Cart
//         </button>
//       )}

//       {/* 🛠️ فقط admin */}
//       {role === "admin" && (
//         <>
//           <button onClick={handleUpdate}>Update</button>
//           <button onClick={handleDelete}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { deleteProduct, updateProduct } from "../services/api";
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export default function ProductCard({ product, onDelete, onUpdate }) {
  const { addToCart } = useCart();
  const { role, token } = useAuth();

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        height: "580px", // 💡 تثبيت الارتفاع الكلي للبطاقة
        display: "flex",
        flexDirection: "column", 
        bgcolor: "white",
        borderRadius: "20px",
        border: "1px solid #f0f0f0",
        overflow: "hidden",
        transition: "0.3s ease",
        "&:hover": { boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }
      }}
    >
      {/* 1. حاوية الصورة: ارتفاع ثابت 100% لضمان المحاذاة */}
      <Box sx={{ 
        height: "240px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        p: 2, 
        bgcolor: "#fcfcfc" 
      }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </Box>

      {/* 2. محتوى النص: نستخدم flexGrow ليأخذ المساحة المتاحة ويدفع الأزرار للأسفل */}
      <CardContent sx={{ 
        flexGrow: 1, 
        display: "flex", 
        flexDirection: "column", 
        textAlign: "center",
        p: 2.5 
      }}>
        <Typography variant="caption" sx={{ color: "#a8dadc", fontWeight: 700, mb: 1, textTransform: "uppercase" }}>
          {product.category || "Jewelery"}
        </Typography>

        {/* 💡 تثبيت العنوان على سطرين كحد أقصى مع ارتفاع ثابت */}
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 600, 
            color: "#2d3436",
            height: "3rem", // مساحة ثابتة لسطرين
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: "1.5rem",
            mb: 1
          }}
        >
          {product.title}
        </Typography>

        {/* 💡 دفع السعر ليكون دائماً في نفس المستوى قبل الأزرار */}
        <Typography variant="h6" sx={{ fontWeight: 800, mt: "auto", color: "#1a1a1a" }}>
          ${product.price}
        </Typography>
      </CardContent>

      {/* 3. حاوية الأزرار: مساحة ثابتة في قاع البطاقة */}
      <CardActions sx={{ 
        flexDirection: "column", 
        gap: 1, 
        p: 2, 
        pb: 3, 
        bgcolor: "white" 
      }}>
        <Button
          component={Link}
          to={`/product/${product.id}`}
          fullWidth
          sx={{ color: "#636e72", textTransform: "none", fontSize: "0.85rem", "&:hover": { bgcolor: "transparent", textDecoration: "underline" } }}
        >
          View Details
        </Button>

        {token && (
          <Button
            variant="contained"
            startIcon={<ShoppingBagOutlinedIcon />}
            fullWidth
            onClick={() => addToCart(product)}
            sx={{
              bgcolor: "#1a1a1a", color: "white", borderRadius: "50px", py: 1.2, textTransform: "none", boxShadow: "none",
              "&:hover": { bgcolor: "#444", boxShadow: "none" }
            }}
          >
            Add to Cart
          </Button>
        )}

        {role === "admin" && (
          <Box sx={{ display: "flex", gap: 1, width: "100%", mt: 1 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<ModeEditOutlineOutlinedIcon />}
              sx={{ borderRadius: "50px", textTransform: "none", color: "#636e72", borderColor: "#eee" }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              startIcon={<DeleteOutlineOutlinedIcon />}
              sx={{ borderRadius: "50px", textTransform: "none", borderColor: "#ffe5e5" }}
            >
              Delete
            </Button>
          </Box>
        )}
      </CardActions>
    </Card>
  );
}