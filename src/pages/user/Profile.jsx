// import { useEffect, useState } from "react";
// import { getUser } from "../../services/api";
// import { useAuth } from "../../context/AuthContext";

// export default function Profile() {
//   const { role } = useAuth();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     getUser(2).then(setUser); // mock user
//   }, []);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Profile</h2>

//       <p>Name: {user.name.firstname} {user.name.lastname}</p>
//       <p>Email: {user.email}</p>
//       <p>Role: {role}</p>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Paper,
  Stack,
} from "@mui/material";


import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { getUser } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { role } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // جلب بيانات المستخدم (رقم 2 كمثال)
    getUser(2).then(setUser);
  }, []);

  if (!user) {
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
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f7f2", py: 10 }}>
      <Container maxWidth="sm">
        
        {/* الورقة الرئيسية للملف الشخصي */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "40px", // حواف دائرية كبيرة للفخامة
            bgcolor: "white",
            border: "1px solid #f0f0f0",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* لمسة جمالية علوية (Brand Accent) */}
          <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", bgcolor: "#a8dadc" }} />

          {/* الصورة الشخصية (Avatar) */}
          <Avatar
            sx={{
              bgcolor: "#f9f7f2",
              color: "#1a1a1a",
              width: 100,
              height: 100,
              margin: "0 auto",
              mb: 3,
              border: "1px solid #f0f0f0"
            }}
          >
            <PersonOutlineOutlinedIcon sx={{ fontSize: 50, fontWeight: 200 }} />
          </Avatar>

          <Typography variant="overline" sx={{ color: "#a8dadc", fontWeight: 600, letterSpacing: 2 }}>
            Member Profile
          </Typography>
          
          <Typography variant="h4" sx={{ fontWeight: 300, color: "#1a1a1a", mt: 1, mb: 1 }}>
            {user.name.firstname} {user.name.lastname}
          </Typography>
          
          <Typography variant="body2" sx={{ color: "#b2bec3", mb: 4, fontWeight: 300 }}>
            Exclusive Taya Member since 2024
          </Typography>

          <Divider sx={{ mb: 4, opacity: 0.5 }} />

          {/* تفاصيل البيانات */}
          <Stack spacing={3} sx={{ textAlign: "left" }}>
            
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmailOutlinedIcon sx={{ color: "#a8dadc", fontSize: 20 }} />
              <Box>
                <Typography variant="caption" sx={{ color: "#b2bec3", display: "block" }}>Email Address</Typography>
                <Typography sx={{ color: "#1a1a1a", fontWeight: 400 }}>{user.email}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <PersonOutlineOutlinedIcon sx={{ color: "#a8dadc", fontSize: 20 }} />
              <Box>
                <Typography variant="caption" sx={{ color: "#b2bec3", display: "block" }}>Username</Typography>
                <Typography sx={{ color: "#1a1a1a", fontWeight: 400 }}>@{user.username}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocalPhoneOutlinedIcon sx={{ color: "#a8dadc", fontSize: 20 }} />
              <Box>
                <Typography variant="caption" sx={{ color: "#b2bec3", display: "block" }}>Phone Number</Typography>
                <Typography sx={{ color: "#1a1a1a", fontWeight: 400 }}>{user.phone}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <VerifiedUserOutlinedIcon sx={{ color: "#a8dadc", fontSize: 20 }} />
              <Box>
                <Typography variant="caption" sx={{ color: "#b2bec3", display: "block" }}>Account Role</Typography>
                <Typography 
                  sx={{ 
                    color: "#1a1a1a", 
                    fontWeight: 600, 
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    fontSize: "0.8rem",
                    bgcolor: "#f9f7f2",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "50px",
                    display: "inline-block",
                    mt: 0.5
                  }}
                >
                  {role}
                </Typography>
              </Box>
            </Box>

          </Stack>
        </Paper>

        <Typography 
          variant="body2" 
          sx={{ mt: 4, textAlign: "center", color: "#b2bec3", fontWeight: 300 }}
        >
          Taya Boutique &copy; 2026 - Secure Account Management
        </Typography>

      </Container>
    </Box>
  );
}