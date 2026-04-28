// import { useEffect, useState } from "react";
// import { getUsers } from "../../services/api";

// export default function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsers().then(setUsers);
//   }, []);

//   return (
//     <div>
//       <h2>Users</h2>

//       {users.map((u) => (
//         <div key={u.id}>
//           {u.name.firstname} {u.name.lastname}
//         </div>
//       ))}
//     </div>
//   );
// }

// with design

import { useEffect, useState } from "react";
import { getUsers } from "../../services/api";
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Avatar, 
  Grid, 
  Divider,
  IconButton
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f7f2", py: 8 }}>
      <Container maxWidth="md">
        
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography 
            variant="overline" 
            sx={{ color: "#a8dadc", fontWeight: 600, letterSpacing: 2 }}
          >
            Administration
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ color: "#1a1a1a", fontWeight: 300, mt: 1 }}
          >
            Registered Users
          </Typography>
          <Box 
            sx={{ 
              width: "40px", 
              height: "2px", 
              bgcolor: "#1a1a1a", 
              margin: "20px auto 0",
              opacity: 0.1 
            }} 
          />
        </Box>

        {/* Users List */}
        <Grid container spacing={2}>
          {users.map((u) => (
            <Grid item xs={12} key={u.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: "20px",
                  bgcolor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #f0f0f0",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                    transform: "translateY(-2px)"
                  }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  {/* صورة المستخدم (Avatar) بألوان هادئة */}
                  <Avatar 
                    sx={{ 
                      bgcolor: "#f0f7f7", 
                      color: "#a8dadc", 
                      width: 50, 
                      height: 50,
                      fontWeight: "bold",
                      fontSize: "1rem"
                    }}
                  >
                    {u.name.firstname[0].toUpperCase()}
                  </Avatar>
                  
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: "#1a1a1a", fontSize: "1.1rem" }}>
                      {u.name.firstname} {u.name.lastname}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, opacity: 0.6 }}>
                      <EmailOutlinedIcon sx={{ fontSize: 16 }} />
                      <Typography variant="body2">
                        {u.email || "user@example.com"} 
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      bgcolor: "#f9f7f2", 
                      px: 2, 
                      py: 0.5, 
                      borderRadius: "50px",
                      color: "#636e72",
                      fontWeight: 500
                    }}
                  >
                    Active Member
                  </Typography>
                  <IconButton size="small">
                    <MoreVertIcon sx={{ color: "#d1d1d1" }} />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Empty State Handling */}
        {users.length === 0 && (
          <Typography sx={{ textAlign: "center", mt: 10, color: "gray", fontWeight: 300 }}>
            No users found in the database.
          </Typography>
        )}

      </Container>
    </Box>
  );
}