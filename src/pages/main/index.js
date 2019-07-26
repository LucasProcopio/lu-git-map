import React from "react";
import Sidebar from "../../components/Sidebar";
import MapGl from "../../components/MapGL";
import { Container } from "./styles";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <MapGl />
        <Sidebar />
      </Container>
    );
  }
}

export default Main;
