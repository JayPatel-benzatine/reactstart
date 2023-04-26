
import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {

  return (
    <React.Fragment>

      <Navigation  />

      <Container >
        {children}
      </Container>

      <Footer />
    </React.Fragment >
  );
};

export default Layout;
