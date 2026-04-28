

// import { useEffect, useState } from "react";
// import { getProducts } from "../../services/api";
// import ProductCard from "../../components/ProductCard";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts().then(setProducts);
//   }, []);

//   const handleDeleteUI = (id) => {
//     setProducts((prev) => prev.filter((p) => p.id !== id));
//   };

//   const handleUpdateUI = (updated) => {
//     setProducts((prev) =>
//       prev.map((p) => (p.id === updated.id ? updated : p))
//     );
//   };

//   return (
//     <div>
//       <h2>Products</h2>

//       {products.map((p) => (
//         <ProductCard
//           key={p.id}
//           product={p}
//           onDelete={handleDeleteUI}
//           onUpdate={handleUpdateUI}
//         />
//       ))}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { getProducts } from "../../services/api";
// import ProductCard from "../../components/ProductCard";

// import { Box, Container, Typography, Grid } from "@mui/material";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts().then(setProducts);
//   }, []);

//   const handleDeleteUI = (id) => {
//     setProducts((prev) => prev.filter((p) => p.id !== id));
//   };

//   const handleUpdateUI = (updated) => {
//     setProducts((prev) =>
//       prev.map((p) => (p.id === updated.id ? updated : p))
//     );
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "#111827", py: 6 }}>
//       <Container maxWidth="xl">

//         <Typography
//           variant="h4"
//           sx={{
//             color: "white",
//             mb: 6,
//             fontWeight: "bold",
//             textAlign: "center",
//             letterSpacing: 1,
//           }}
//         >
//           Products
//         </Typography>

//         <Grid
//           container
//           spacing={4}
//           justifyContent="center"
//         >
//           {products.map((p) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               xl={2.4}
//               key={p.id}
//               sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <ProductCard
//                 product={p}
//                 onDelete={handleDeleteUI}
//                 onUpdate={handleUpdateUI}
//               />
//             </Grid>
//           ))}
//         </Grid>

//       </Container>
//     </Box>
//   );
// }

// import { useEffect, useState } from "react";
// import { getProducts } from "../../services/api";
// import ProductCard from "../../components/ProductCard";

// import { Box, Container, Typography, Grid } from "@mui/material";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts().then(setProducts);
//   }, []);

//   const handleDeleteUI = (id) => {
//     setProducts((prev) => prev.filter((p) => p.id !== id));
//   };

//   const handleUpdateUI = (updated) => {
//     setProducts((prev) =>
//       prev.map((p) => (p.id === updated.id ? updated : p))
//     );
//   };

//   return (
//     <Box 
//       sx={{ 
//         minHeight: "100vh", 
//         bgcolor: "#f9f7f2", // نفس لون خلفية الـ Landing Page (Cream)
//         py: 10, // زيادة المساحة العلوية لإعطاء "نفس" للتصميم
//         transition: "background-color 0.5s ease"
//       }}
//     >
//       <Container maxWidth="xl">

//         {/* قسم العنوان المحسن */}
//         <Box sx={{ mb: 8, textAlign: "center" }}>
//           <Typography
//             variant="overline"
//             sx={{ 
//               color: "#a8dadc", 
//               fontWeight: 600, 
//               letterSpacing: 3,
//               display: "block",
//               mb: 1
//             }}
//           >
//             Taya Collection
//           </Typography>

//           <Typography
//             variant="h3"
//             sx={{
//               color: "#1a1a1a",
//               fontWeight: 300, // خط خفيف ليعطي شعور الـ Premium
//               letterSpacing: -1,
//               fontFamily: "'Inter', sans-serif",
//             }}
//           >
//             Our Products
//           </Typography>

//           <Box 
//             sx={{ 
//               width: "60px", 
//               height: "2px", 
//               bgcolor: "#1a1a1a", 
//               margin: "24px auto 0",
//               opacity: 0.2
//             }} 
//           />
//         </Box>

//         {/* شبكة المنتجات */}
//         <Grid
//           container
//           spacing={4} // مسافات واسعة بين الكروت
//           justifyContent="center"
//         >
//           {products.map((p) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               xl={2.4}
//               key={p.id}
//               sx={{ 
//                 display: "flex", 
//                 justifyContent: "center",
//                 perspective: "1000px" // لإضافة عمق بسيط عند حركة الكروت
//               }}
//             >
//               <ProductCard
//                 product={p}
//                 onDelete={handleDeleteUI}
//                 onUpdate={handleUpdateUI}
//               />
//             </Grid>
//           ))}
//         </Grid>

//         {/* حالة عدم وجود منتجات */}
//         {products.length === 0 && (
//           <Box sx={{ textAlign: "center", mt: 10, opacity: 0.5 }}>
//             <Typography variant="h6" sx={{ fontWeight: 300 }}>
//               Fetching the latest pieces for you...
//             </Typography>
//           </Box>
//         )}

//       </Container>
//     </Box>
//   );
// }
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard";

import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleDeleteUI = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleUpdateUI = (updated) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f9f7f2",
        py: 8,
        transition: "background-color 0.5s ease",
      }}
    >
      <Container maxWidth="xl">
        {/* العناوين */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{
              color: "#a8dadc",
              fontWeight: 600,
              letterSpacing: 3,
              display: "block",
              mb: 1,
            }}
          >
            Taya Collection
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "#1a1a1a",
              fontWeight: 300,
              letterSpacing: -1,
            }}
          >
            Our Products
          </Typography>

          <Box
            sx={{
              width: "50px",
              height: "2px",
              bgcolor: "#1a1a1a",
              margin: "20px auto 0",
              opacity: 0.1,
            }}
          />
        </Box>

        {/* الشبكة */}
        <Grid container spacing={3} justifyContent="center">
          {products.map((p) => (
          
            <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}> 
  <ProductCard 
    product={p} 
    onDelete={handleDeleteUI} 
    onUpdate={handleUpdateUI} 
  />
</Grid>
          ))}
        </Grid>

        {products.length === 0 && (
          <Box sx={{ textAlign: "center", mt: 10, opacity: 0.4 }}>
            <Typography variant="h6" sx={{ fontWeight: 300 }}>
              Fetching the latest pieces for you...
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}