
// import { useCart } from "../../context/CartContext";
// import { createCart } from "../../services/api";

// export default function Cart() {
//   const { cart, removeFromCart } = useCart();

//   const handleCheckout = async () => {
//     if (cart.length === 0) {
//       alert("Cart is empty");
//       return;
//     }

//     try {
//       const res = await createCart(cart);
//       console.log(res);
//       alert("Checkout done");
//     } catch (error) {
//       console.error(error);
//       alert("Checkout failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Your Cart</h2>

//       {cart.length === 0 && <p>Cart is empty</p>}

//       {cart.map((item) => (
//         <div key={item.id}>
//           <h4>{item.title}</h4>
//           <p>${item.price}</p>
//           <button onClick={() => removeFromCart(item.id)}>Remove</button>
//         </div>
//       ))}

//       <button onClick={handleCheckout} disabled={cart.length === 0}>
//         Checkout
//       </button>
//     </div>
//   );
// }

/// with design



import {
  Container,
  Typography,
  CardMedia,
  Button,
  Grid,
  Box,
  Divider,
  Paper,
  IconButton,
} from "@mui/material";


import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { useCart } from "../../context/CartContext";
import { createCart } from "../../services/api";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your bag is empty");
      return;
    }

    try {
      const res = await createCart(cart);
      console.log(res);
      alert("Thank you! Your order has been placed. ✨");
    } catch (error) {
      console.error(error);
      alert("Checkout failed. Please try again.");
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f7f2", py: 8 }}>
      <Container maxWidth="md">
        
        {/* رأس الصفحة */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "#a8dadc", fontWeight: 600, letterSpacing: 2 }}>
            Your Selection
          </Typography>
          <Typography variant="h3" sx={{ color: "#1a1a1a", fontWeight: 300, mt: 1 }}>
            Shopping Bag
          </Typography>
        </Box>

        {cart.length === 0 ? (
          <Paper elevation={0} sx={{ p: 10, textAlign: "center", borderRadius: "30px", bgcolor: "white" }}>
            <Typography variant="h6" sx={{ fontWeight: 300, color: "#636e72" }}>
              Your bag is currently empty.
            </Typography>
            <Button 
              href="/products" 
              sx={{ mt: 3, color: "#1a1a1a", textDecoration: "underline" }}
            >
              Back to Shop
            </Button>
          </Paper>
        ) : (
          <Grid container spacing={4}>
            {/* قائمة المنتجات */}
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {cart.map((item) => (
                  <Paper
                    key={item.id}
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: "20px",
                      bgcolor: "white",
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #f0f0f0",
                    }}
                  >
                    <Box sx={{ bgcolor: "#f9f9f9", borderRadius: "12px", p: 1 }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 80, height: 80, objectFit: "contain", mixBlendMode: "multiply" }}
                        image={item.image}
                        alt={item.title}
                      />
                    </Box>

                    <Box sx={{ ml: 3, flex: 1 }}>
                      <Typography sx={{ fontWeight: 600, color: "#1a1a1a" }}>
                        {item.title.slice(0, 30)}...
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#636e72" }}>
                        ${item.price}
                      </Typography>
                    </Box>

                    <IconButton 
                      onClick={() => removeFromCart(item.id)}
                      sx={{ color: "#ff4d4d", "&:hover": { bgcolor: "#fff0f0" } }}
                    >
                      <DeleteOutlineOutlinedIcon/>
                    </IconButton>
                  </Paper>
                ))}
              </Box>
            </Grid>

            {/* ملخص الطلب (Summary) */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "30px",
                  bgcolor: "white",
                  border: "1px solid #f0f0f0",
                  position: "sticky",
                  top: 100
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
                  Order Summary
                </Typography>
                
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                  <Typography color="text.secondary">Subtotal</Typography>
                  <Typography sx={{ fontWeight: 600 }}>${totalPrice.toFixed(2)}</Typography>
                </Box>
                
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                  <Typography color="text.secondary">Shipping</Typography>
                  <Typography sx={{ color: "#a8dadc", fontWeight: 600 }}>Free</Typography>
                </Box>

                <Divider sx={{ my: 3, opacity: 0.5 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
                  <Typography sx={{ fontWeight: 700 }}>Total</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    ${totalPrice.toFixed(2)}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<ShoppingBagOutlinedIcon />}
                  onClick={handleCheckout}
                  sx={{
                    bgcolor: "#1a1a1a",
                    color: "white",
                    py: 2,
                    borderRadius: "50px",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#4a4a4a", boxShadow: "none" }
                  }}
                >
                  Checkout Now
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}