import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Button variant="contained">
        MUI is Working
      </Button>
    </Container>
  );
}

export default App;
