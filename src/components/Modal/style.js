import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: ${props => (props.show ? "block" : "none")};
`;

export const Container = styled.div`
  width: 300px;
  height: 150px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  .username-label {
    font-size: 14px;
    color: #999;
    font-weight: bold;
    text-align: center;
    display: block;
    margin: 5px 0px;
    cursor: pointer;
  }
  .github-username {
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 4px;
    font-size: 14px;
    box-sizing: border-box;
    &:focus {
      outline-color: #ddd;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

export const SubmitButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 5px;
  font-size: 14px;
  color: #fff;
  background-color: #555;
  border-radius: 4px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 5px;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;
