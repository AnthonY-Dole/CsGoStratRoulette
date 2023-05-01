import { Container } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
type Props = {};

function AppLayout({}: Props) {
  return (
    <Container maxW={"8xl"}>
      <Outlet />
    </Container>
  );
}

export default AppLayout;
