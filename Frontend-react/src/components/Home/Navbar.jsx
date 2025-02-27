import { Typography, Box, styled } from "@mui/material";
import { navData } from "../Constants/data";

// Styled Components
const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px 130px 0 130px", // Reduced margin to decrease gap
  overflowX: "auto", // Enables horizontal scrolling if needed
  gap: "10px", // Reduced gap between items
  padding: "10px 0", // Ensures items are aligned properly
  [theme.breakpoints.down("lg")]: {
    margin: "0px",
  },
}));

const Container = styled(Box)({
  padding: "0px", // Removed padding to avoid extra spacing
  textAlign: "center",
  minWidth: "100px", 
});

const Text = styled(Typography)({
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "inherit",
  marginTop: "4px", 
});

const NavBar = () => {
  return (
    <Component>
      {navData.map((temp, index) => (
        <Container key={index}>
          <img src={temp.url} style={{ width: 64, display: "block", margin: "0 auto" }} alt={temp.text} />
          <Text>{temp.text}</Text>
        </Container>
      ))}
    </Component>
  );
};

export default NavBar;
