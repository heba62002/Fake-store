// import { useEffect, useState } from "react";
// import { getProducts, getUsers } from "../../services/api";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const [products, setProducts] = useState([]);
//   const [users, setUsers] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     getProducts().then(setProducts);
//     getUsers().then(setUsers);
//   }, []);

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>

//       {/* Stats */}
//       <div>
//         <p>Products: {products.length}</p>
//         <p>Users: {users.length}</p>
//         <p>Orders: {Math.floor(Math.random() * 20)}</p>
//       </div>

//       {/* Actions */}
//       <div>
//         <button onClick={() => navigate("/admin/add")}>
//           Add Product
//         </button>

//         <button onClick={() => navigate("/admin/users")}>
//           View Users
//         </button>
//       </div>

//       {/* Recent Products */}
//       <div>
//         <h3>Recent Products</h3>

//         {products.slice(0, 3).map((p) => (
//           <div key={p.id}>
//             {p.title}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// code with design
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Paper,
  Divider,
} from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddIcon from "@mui/icons-material/Add";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { getProducts, getUsers } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(setProducts);
    getUsers().then(setUsers);
  }, []);

  // تنسيق مشترك للبطاقات الإحصائية
  const statCardStyle = {
    bgcolor: "white",
    color: "#1a1a1a",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
    border: "1px solid #f0f0f0",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "translateY(-5px)" }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f7f2", py: 8 }}>
      <Container>
        {/* العنوان الرئيسي */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ color: "#a8dadc", fontWeight: 600, letterSpacing: 2 }}>
            Management Portal
          </Typography>
          <Typography variant="h3" sx={{ color: "#1a1a1a", fontWeight: 300, mt: 1 }}>
            Admin Dashboard
          </Typography>
        </Box>

        {/* 📊 الإحصائيات (Stats) */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={statCardStyle}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}>
                <Box sx={{ bgcolor: "#f0f7f7", p: 1.5, borderRadius: "12px" }}>
                  <Inventory2OutlinedIcon sx={{ color: "#a8dadc" }} />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Total Products</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>{products.length}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={statCardStyle}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}>
                <Box sx={{ bgcolor: "#fdf8f0", p: 1.5, borderRadius: "12px" }}>
                  <PeopleOutlinedIcon sx={{ color: "#f3a683" }} />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Active Users</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>{users.length}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={statCardStyle}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}>
                <Box sx={{ bgcolor: "#f0f0f0", p: 1.5, borderRadius: "12px" }}>
                  <ShoppingBagOutlinedIcon sx={{ color: "#1a1a1a" }} />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Daily Orders</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {Math.floor(Math.random() * 20)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* ⚡ الإجراءات السريعة (Actions) */}
        <Box sx={{ mt: 8, mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: 400 }}>Quick Actions</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate("/admin/add")}
              sx={{
                bgcolor: "#1a1a1a",
                borderRadius: "50px",
                textTransform: "none",
                px: 3,
                "&:hover": { bgcolor: "#4a4a4a" }
              }}
            >
              Add New Product
            </Button>
            <Button
              variant="outlined"
              startIcon={<VisibilityOutlinedIcon />}
              onClick={() => navigate("/admin/users")}
              sx={{
                borderColor: "#1a1a1a",
                color: "#1a1a1a",
                borderRadius: "50px",
                textTransform: "none",
                px: 3,
                "&:hover": { borderColor: "#4a4a4a", bgcolor: "transparent" }
              }}
            >
              Manage Users
            </Button>
          </Box>
        </Box>

        <Divider sx={{ mb: 6, opacity: 0.1 }} />

        {/* 🆕 آخر المنتجات المضافة */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 500, color: "#636e72" }}>
            Recently Added Products
          </Typography>
          
          <Grid container spacing={2}>
            {products.slice(0, 3).map((p) => (
              <Grid item xs={12} key={p.id}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: "15px",
                    bgcolor: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #f0f0f0",
                    "&:hover": { bgcolor: "#fafafa" }
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box 
                      component="img" 
                      src={p.image} 
                      sx={{ width: 40, height: 40, objectFit: "contain", borderRadius: "8px", bgcolor: "#f9f9f9" }} 
                    />
                    <Typography sx={{ fontWeight: 500 }}>{p.title}</Typography>
                  </Box>
                  <Typography sx={{ color: "#a8dadc", fontWeight: 700 }}>${p.price}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}