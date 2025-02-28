import React, { useState } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../login/LoginDialog";

const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  font-weight: 600;
  border-radius: 2px;
  padding: 5px 40px;
  height: 32px;
  box-shadow: none;
`;

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  align-items: center;

  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 14px;
  }
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={openDialog}>
        Login
      </LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCart style={{ marginRight: 8 }} />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} handleClose={closeDialog} />
    </Wrapper>
  );
};

export default CustomButtons;
