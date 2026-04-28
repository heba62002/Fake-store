

// import { useState } from "react";
// import { addProduct } from "../../services/api";

// export default function AddProduct() {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await addProduct({
//       title,
//       price,
//       description: "Admin product",
//       image: "https://i.pravatar.cc",
//       category: "electronics",
//     });

//     alert("Added");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input onChange={(e) => setTitle(e.target.value)} />
//       <input onChange={(e) => setPrice(e.target.value)} />
//       <button>Add</button>
//     </form>
//   );
// }

/////////////////////////////\
import { useState } from "react";
import { addProduct } from "../../services/api";
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Stack, 
  InputAdornment 
} from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await addProduct({
      title,
      price,
      description: "Admin product",
      image: "https://i.pravatar.cc", // يمكنك استبدالها لاحقاً برابط صورة حقيقية
      category: "electronics",
    });

    setLoading(false);
    alert("Product added successfully! ✨");
    setTitle("");
    setPrice("");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f7f2", py: 10 }}>
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "30px",
            bgcolor: "white",
            border: "1px solid #f0f0f0",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
          }}
        >
          {/* رأس الصفحة */}
          <Box sx={{ mb: 5, textAlign: "center" }}>
            <Typography variant="overline" sx={{ color: "#a8dadc", fontWeight: 600, letterSpacing: 2 }}>
              Inventory
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 300, mt: 1, color: "#1a1a1a" }}>
              New Product
            </Typography>
            <Box sx={{ width: "40px", height: "2px", bgcolor: "#1a1a1a", margin: "15px auto", opacity: 0.1 }} />
          </Box>

          {/* النموذج */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" sx={{ mb: 1, ml: 1, fontWeight: 500, color: "#636e72" }}>
                  Product Name
                </Typography>
                <TextField
                  fullWidth
                  placeholder="e.g. Elegant Taya Necklace"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  sx={inputStyles}
                />
              </Box>

              <Box>
                <Typography variant="body2" sx={{ mb: 1, ml: 1, fontWeight: 500, color: "#636e72" }}>
                  Price
                </Typography>
                <TextField
                  fullWidth
                  type="number"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SellOutlinedIcon sx={{ fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={inputStyles}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                startIcon={<AddPhotoAlternateOutlinedIcon />}
                sx={{
                  bgcolor: "#1a1a1a",
                  color: "white",
                  py: 2,
                  mt: 2,
                  borderRadius: "50px",
                  textTransform: "none",
                  fontSize: "1rem",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#4a4a4a", boxShadow: "none" },
                }}
              >
                {loading ? "Adding..." : "Create Product"}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

// تنسيقات مشتركة للـ Inputs لتسهيل التعديل
const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    bgcolor: "#fafafa",
    "& fieldset": { borderColor: "transparent" },
    "&:hover fieldset": { borderColor: "#a8dadc" },
    "&.Mui-focused fieldset": { borderColor: "#1a1a1a" },
  },
};