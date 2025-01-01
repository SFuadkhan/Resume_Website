import React from "react";
import Background from "./Background";
import Controllers from "./Controllers";
import { Outlet } from "react-router-dom";
import Container from "../components/Container/Container";
import ProgressBar from "../components/ProgressBar/ProgressBar";

function MainLayout({ children }) {
  return (
    <ProgressBar>
      <Background>
        <Controllers>
          <Container>
            <Outlet></Outlet>
          </Container>
        </Controllers>
      </Background>
    </ProgressBar>
  );
}

export default MainLayout;
