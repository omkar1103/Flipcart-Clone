import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
        <Box style={{marginTop:54}}>
          <Home />

        </Box>
        <div style={{height:'200px'}}>

        </div>
      <Footer />
    </div>
  );
}

export default App;
