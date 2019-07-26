import React from "react";
import ReactMapGL from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPTOKEN =
  "pk.eyJ1IjoibHVjYXNwcm9jb3BpbyIsImEiOiJjanlpZ2VzZW8wYTJ5M25wNjgyYWJpajJ4In0.20zwEWbus5sLGYqDRLzzpQ";

class MapGL extends React.Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -22.5132,
      longitude: -47.7736,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.resizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeWindow);
  }

  // Criate func para salvar locale
  _onClickMap(e) {
    console.log(e.lngLat);
  }

  resizeWindow = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={MAPTOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => this.setState({ viewport })}
        onClick={this._onClickMap} />
    );
  }
}

export default MapGL;
