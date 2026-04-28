// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getProduct } from "../../services/api";
// import { updateProduct } from "../../services/api";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     getProduct(id).then(setProduct);
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{product.title}</h2>
//       <img src={product.image} width="150" />
//       <p>{product.description}</p>
//       <h3>${product.price}</h3>
   
//     </div>
//   );
// }


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Box,
//   CircularProgress,
//   Button,
//   Divider,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";

// import { getProduct, updateProduct } from "../../services/api";
// import { useAuth } from "../../context/AuthContext";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const { role } = useAuth();

//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     getProduct(id).then(setProduct);
//   }, [id]);

//   const handleUpdate = async () => {
//     if (role !== "admin") return;

//     const updated = {
//       ...product,
//       title: product.title + " (Updated)",
//     };

//     const res = await updateProduct(id, updated);
//     setProduct(res);
//   };

//   if (!product) {
//     return (
//       <Box
//         sx={{
//           minHeight: "100vh",
//           bgcolor: "#111827",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "#111827", py: 5 }}>
//       <Container maxWidth="md">
//         <Card
//           sx={{
//             bgcolor: "#1f2937",
//             color: "white",
//             borderRadius: 3,
//             p: 3,
//           }}
//         >
//           <CardMedia
//             component="img"
//             image={product.image}
//             alt={product.title}
//             sx={{
//               height: 300,
//               objectFit: "contain",
//               bgcolor: "white",
//               borderRadius: 2,
//               mb: 3,
//             }}
//           />

//           <CardContent>
//             <Typography variant="h5" gutterBottom>
//               {product.title}
//             </Typography>

//             <Typography color="gray" sx={{ mb: 2 }}>
//               {product.description}
//             </Typography>

//             <Divider sx={{ my: 2, bgcolor: "gray" }} />

//             <Typography variant="h6">
//               ${product.price}
//             </Typography>

//             {/* 🛠️ Admin فقط */}
//             {role === "admin" && (
//               <Button
//                 variant="contained"
//                 startIcon={<EditIcon />}
//                 sx={{ mt: 3 }}
//                 onClick={handleUpdate}
//               >
//                 Update Product
//               </Button>
//             )}
//           </CardContent>
//         </Card>
//       </Container>
//     </Box>
//   );
// }

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  CardMedia,
  Box,
  CircularProgress,
  Button,
  Divider,
  Grid,
  Paper
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { getProduct, updateProduct } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { role } = useAuth();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, [id]);

  const handleUpdate = async () => {
    if (role !== "admin") return;

    const updated = {
      ...product,
      title: product.title + " (Updated)",
    };

    const res = await updateProduct(id, updated);
    setProduct(res);
  };

  
  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f9f7f2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: "#1a1a1a" }} />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f7f2", py: { xs: 4, md: 10 } }}>
      <Container maxWidth="lg">
        
     
        <Button
          component={Link}
          to="/products"
          startIcon={<ArrowBackIosNewIcon sx={{ fontSize: 14 }} />}
          sx={{ color: "#1a1a1a", mb: 4, textTransform: "none", fontWeight: 500 }}
        >
          Back to Collection
        </Button>

        <Grid container spacing={8} alignItems="center">
          
      
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "30px",
                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #f0f0f0"
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  width: "100%",
                  maxHeight: 500,
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
            </Paper>
          </Grid>

         
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="overline"
                sx={{ color: "#a8dadc", fontWeight: 600, letterSpacing: 2 }}
              >
                Exclusive Piece
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 300,
                  color: "#1a1a1a",
                  mt: 1,
                  mb: 3,
                  lineHeight: 1.2
                }}
              >
                {product.title}
              </Typography>

              <Typography
                variant="h4"
                sx={{ fontWeight: 400, color: "#1a1a1a", mb: 4 }}
              >
                ${product.price}
              </Typography>

              <Divider sx={{ mb: 4, opacity: 0.6 }} />

              <Typography
                sx={{
                  color: "#636e72",
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  mb: 5,
                  fontWeight: 300
                }}
              >
                {product.description}
              </Typography>

             
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#1a1a1a",
                    color: "white",
                    px: 6,
                    py: 2,
                    borderRadius: "50px",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#4a4a4a", boxShadow: "none" }
                  }}
                >
                  Add to Bag
                </Button>

              
                {role === "admin" && (
                  <Button
                    variant="outlined"
                    startIcon={<EditOutlinedIcon />}
                    onClick={handleUpdate}
                    sx={{
                      borderColor: "#1a1a1a",
                      color: "#1a1a1a",
                      borderRadius: "50px",
                      px: 4,
                      textTransform: "none",
                      "&:hover": { borderColor: "#4a4a4a", bgcolor: "rgba(0,0,0,0.02)" }
                    }}
                  >
                    Update Info
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}