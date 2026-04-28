// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const { loginUser } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Admin
//     if (username === "admin" && password === "1234") {
//       loginUser("fake-token", username);
//       navigate("/admin");
//       return;
//     }

//     // User
//     if (username === "user" && password === "1234") {
//       loginUser("fake-token", username);
//       navigate("/products");
//       return;
//     }

//     alert("Invalid credentials");
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <h2>Login</h2>

//         <input
//           type="text"
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <br />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Stack 
} from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin
    if (username === "admin" && password === "1234") {
      loginUser("fake-token", username);
      navigate("/admin");
      return;
    }

    // User
    if (username === "user" && password === "1234") {
      loginUser("fake-token", username);
      navigate("/products");
      return;
    }

    alert("Invalid credentials");
  };

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        bgcolor: "#f9f7f2", // الخلفية الكريمية المعتمدة للبراند
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        py: 4
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "30px", 
            bgcolor: "white",
            border: "1px solid #f0f0f0",
            boxShadow: "0 10px 40px rgba(0,0,0,0.03)", // ظل خفيف جداً
            textAlign: "center"
          }}
        >
          {/* شعار أو اسم المتجر */}
          <Typography 
            variant="overline" 
            sx={{ color: "#a8dadc", fontWeight: 600, letterSpacing: 3 }}
          >
            Welcome Back
          </Typography>
          
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 300, 
              color: "#1a1a1a", 
              mt: 1, 
              mb: 5,
              fontFamily: "'Inter', sans-serif" 
            }}
          >
            TAYA LOGIN
          </Typography>

          <form onSubmit={handleLogin}>
            <Stack spacing={3}>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="caption" sx={{ ml: 1, color: "#636e72", fontWeight: 500 }}>
                  USERNAME
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                  sx={inputStyles}
                />
              </Box>

              <Box sx={{ textAlign: "left" }}>
                <Typography variant="caption" sx={{ ml: 1, color: "#636e72", fontWeight: 500 }}>
                  PASSWORD
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  variant="outlined"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  sx={inputStyles}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#1a1a1a",
                  color: "white",
                  py: 1.8,
                  mt: 2,
                  borderRadius: "50px", // شكل كبسولة (Pill-shape)
                  textTransform: "none",
                  fontSize: "1rem",
                  boxShadow: "none",
                  transition: "0.3s",
                  "&:hover": { 
                    bgcolor: "#4a4a4a", 
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)" 
                  }
                }}
              >
                Sign In
              </Button>
            </Stack>
          </form>

          <Typography 
            variant="body2" 
            sx={{ mt: 4, color: "#b2bec3", fontWeight: 300 }}
          >
            Access the exclusive collection
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    bgcolor: "#fafafa",
    mt: 0.5,
    "& fieldset": { borderColor: "transparent" },
    "&:hover fieldset": { borderColor: "#a8dadc" }, 
    "&.Mui-focused fieldset": { borderColor: "#1a1a1a" }, 
  },
  "& input": {
    fontSize: "0.9rem",
    p: 2
  }
};