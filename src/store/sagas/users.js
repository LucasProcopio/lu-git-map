import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";
import { toast } from "react-toastify";

import { Creators as Users } from "../ducks/users";

export function* addUserRequest(action) {
  try {
    const { data } = yield call(api.get, `${action.payload.user}`);
    const isDuplicate = yield select(state =>
      state.users.users.find(user => user.id === data.id)
    );

    if (isDuplicate) {
      yield put(Users.addUserFail());
      toast.error("😰 User already exists.");
    } else {
      const user = {
        id: data.id,
        avatar: data.avatar_url,
        name: data.name,
        blog: data.blog,
        repos: data.public_repos,
        geo: action.payload.geo
      };
      yield put(Users.addUserSuccess(user));
      toast("😱 User successfully added to favorites");
    }
  } catch (err) {
    yield put(Users.addUserFail());
    toast.error("😭 Unexpected error! ");
  }
}
