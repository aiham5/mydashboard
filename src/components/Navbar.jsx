import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Restaurant Dashboard
        </Typography>
        {/* Add navigation links */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/transactions">
          Transactions
        </Button>
        <Button color="inherit" component={Link} to="/analytics">
          Analytics
        </Button>
        <Button color="inherit" component={Link} to="/faq">
          FAQ
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
