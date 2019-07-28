import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as userCreators } from "../../store/ducks/users";

import {
  Container,
  Form,
  SubmitButton,
  CancelButton,
  ButtonWrapper,
  Background
} from "./style";

class Modal extends React.Component {
  state = {
    username: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      userGeolocation: this.props.geo,
      username: this.state.username
    };
    this.props.addUserRequest(userData);
  };

  render() {
    return (
      <Background show={this.props.showModal}>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FaGithubAlt size={14} fill="#555" />
            <label className="username-label" htmlFor="github-profile">
              Github profile
            </label>
            <input
              className="github-username"
              id="github-profile"
              name="username"
              type="text"
              placeholder="Github Username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <ButtonWrapper>
              <CancelButton
                type="button"
                onClick={() => this.props.closeForm()}
              >
                Cancel
              </CancelButton>
              <SubmitButton type="submit">Submit</SubmitButton>
            </ButtonWrapper>
          </Form>
        </Container>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.users.modal,
  geo: state.users.geo
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(userCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Modal);
