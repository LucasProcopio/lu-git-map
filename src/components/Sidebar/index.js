import React from "react";
import { FaRegTimesCircle, FaRegWindowMinimize } from "react-icons/fa";
import { GoRepo, GoLinkExternal, GoStar } from "react-icons/go";

import { connect } from "react-redux";

import { Container, Avatar, UserList, MainInfo, Info } from "./style";
import { Creators } from "../../store/ducks/users";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Sidebar = props => {
  const handleDelete = userid => {
    confirmAlert({
      title: "Delete user",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Delete",
          onClick: () => props.deleteUser(userid)
        },
        {
          label: "Cancel"
        }
      ]
    });
  };

  return (
    <Container>
      <div className="title">
        <GoStar size={20} fill="#555" />
        <h1>Favorite List</h1>
      </div>
      <UserList>
        {props.users.map(user => (
          <li className="list-item" key={user.id}>
            <MainInfo>
              <Avatar src={user.avatar} />
              <h2 className="username">{user.name}</h2>
            </MainInfo>
            <Info>
              {user.blog ? (
                <a className="blog" target="__blank" href={user.blog}>
                  <GoLinkExternal size={20} fill="#555" />
                </a>
              ) : (
                <FaRegWindowMinimize size={20} fill="#555" />
              )}
              <p className="repositories">
                <GoRepo size={20} fill="#555" />
                <span className="repo-count">{user.repos}</span>
              </p>
              <button
                onClick={() => handleDelete(user.id)}
                className="delete-repo"
              >
                <FaRegTimesCircle size={20} fill="#555" />
              </button>
            </Info>
          </li>
        ))}
      </UserList>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: userid => dispatch(Creators.deleteUser(userid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
