import React from "react";
import { ToastContainer } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import MapGl from "../../components/MapGL";
import Modal from "../../components/Modal";

import { Container } from "./styles";
import "react-toastify/dist/ReactToastify.css";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <MapGl />
        <Sidebar />
        <Modal />
        <ToastContainer />
      </Container>
    );
  }
}

export default Main;
