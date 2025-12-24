import { Box, Toolbar } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;
