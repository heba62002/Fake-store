// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { updateProduct } from "../../services/api";

// export default function EditProduct() {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");

//   const handleUpdate = async () => {
//     await updateProduct(id, { title });
//     alert("Updated");
//   };

//   return (
//     <div>
//       <input onChange={(e) => setTitle(e.target.value)} />
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }

//with design

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  IconButton,
  Stack
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { updateProduct, getProduct } from "../../services/api";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // جلب البيانات الحالية للمنتج لوضعها في الـ Input افتراضياً
  useEffect(() => {
    getProduct(id).then((data) => {
      if (data) setTitle(data.title);
    });
  }, [id]);

  const handleUpdate = async () => {
    setLoading(true);
    await updateProduct(id, { title });
    setLoading(false);
    navigate(`/product/${id}`); // العودة لصفحة التفاصيل بعد التعديل
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f7f2", py: 10 }}>
      <Container maxWidth="sm">
        
        {/* زر العودة */}
        <IconButton 
          onClick={() => navigate(-1)} 
          sx={{ mb: 2, color: "#1a1a1a" }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
        </IconButton>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "30px",
            bgcolor: "white",
            border: "1px solid #f0f0f0",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)"
          }}
        >
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography variant="overline" sx={{ color: "#a8dadc", fontWeight: 600, letterSpacing: 2 }}>
              Product Editor
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 300, mt: 1, color: "#1a1a1a" }}>
              Refine Details
            </Typography>
          </Box>

          <Stack spacing={4}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, ml: 1, fontWeight: 500, color: "#636e72" }}>
                Product Title
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter new title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                    bgcolor: "#f9f9f9",
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: "#a8dadc" },
                    "&.Mui-focused fieldset": { borderColor: "#1a1a1a" },
                  }
                }}
              />
            </Box>

            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<SaveOutlinedIcon />}
              onClick={handleUpdate}
              disabled={loading}
              sx={{
                bgcolor: "#1a1a1a",
                color: "white",
                py: 2,
                borderRadius: "50px",
                textTransform: "none",
                fontSize: "1rem",
                boxShadow: "none",
                "&:hover": { bgcolor: "#4a4a4a", boxShadow: "none" }
              }}
            >
              {loading ? "Saving Changes..." : "Update Product"}
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}