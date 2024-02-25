import { Link, Typography } from "@mui/material";

export const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 8, mb: 4 }}
    >
      {"Copyright ©"}
      <Link color="inherit" href="https://chatrooms.party/">
        Todolist Ireland
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
