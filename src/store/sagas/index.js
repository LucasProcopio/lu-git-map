import { takeLatest, all } from "redux-saga/effects";
import { addUserRequest } from "./users";

import { Types as userTypes } from "../ducks/users";

export default function* rootSaga() {
  yield all([takeLatest(userTypes.ADD_USER_REQUEST, addUserRequest)]);
}
