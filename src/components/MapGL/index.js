import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import { Creators } from "../../store/ducks/users";

import { connect } from "react-redux";

import "mapbox-gl/dist/mapbox-gl.css";
import { Avatar } from "./styles";

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

  _onClickMap = e => {
    const geo = {
      longitude: e.lngLat[0],
      latitude: e.lngLat[1]
    };
    this.props.openFormModal(geo);
  };

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
    const { users } = this.props;
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={MAPTOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => this.setState({ viewport })}
        onClick={event => this._onClickMap(event)}
      >
        {users.map(user => (
          <Marker
            key={user.id}
            latitude={user.geo.latitude}
            longitude={user.geo.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Avatar src={user.avatar} />
          </Marker>
        ))}
      </ReactMapGL>
    );
  }
}

const mapStatetoProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openFormModal: geo => dispatch(Creators.openForm(geo))
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(MapGL);
