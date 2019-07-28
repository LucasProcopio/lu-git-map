import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 95%;
  margin: 15px 0 0 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #ddd;
  position: absolute;
  top: 0;
  left: 0;
  .title {
    text-align: center;
    color: #555;
    font-size: 14px;
    padding: 10px 10px;
    border-bottom: 2px solid #eee;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  margin: 5px 10px;
  .username {
    color: #555;
    line-height: 40px;
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  .blog {
    text-decoration: none;
  }
  .repositories {
    position: relative;
    .repo-count {
      position: absolute;
      top: 2px;
      font-size: 14px;
      color: #555;
    }
  }
  .delete-repo {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border: 2px solid #555;
  border-radius: 50%;
`;

export const UserList = styled.ul`
  overflow-y: auto;
  height: 100%;
  .list-item {
    background-color: #fff;
    padding: 5px;
    &:nth-child(2n + 0) {
      background-color: #eee;
    }
  }
`;
