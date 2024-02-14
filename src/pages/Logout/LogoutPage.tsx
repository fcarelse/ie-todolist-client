import { MouseEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../../themes/Default/DefaultTheme";
import { Copyright } from "../../components/Copyright/CopyrightComp";
import { useAuthService } from "../../service/Auth/useAuthService";
import { getToken, setToken } from "../../helper/Fetch/FetchHelper";

export const LogoutPage = ({}) => {
  let { logout } = useAuthService();

  const handleSubmit = async (event: MouseEvent) => {
    event.preventDefault();
    logout();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log Out Page
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(event) => setToken(event.target.value || "")}
              name="token"
              label="Token"
              type="text"
              id="token"
              defaultValue={getToken()}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={(event) => handleSubmit(event)}
              sx={{ mt: 3, mb: 2 }}
            >
              Log Out
            </Button>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};
