import { CssBaseline, Container, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TransactionLog from "./components/TransactionLog";
import FAQ from "./components/FAQ";
import Home from "./components/Home"; // Create this component for the home page
import Analytics from "./components/Analytics"; // Create this component for the analytics page
import { mockTransactions } from "./data/mockData";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Container>
          <Routes>
            {/* Define routes for your app */}
            <Route path="/" element={<Home />} />
            <Route
              path="/transactions"
              element={<TransactionLog transactions={mockTransactions} />}
            />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
};

export default App;
