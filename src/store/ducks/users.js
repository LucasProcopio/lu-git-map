/**
 * Action Types
 */
export const Types = {
  ADD_USER_REQUEST: "users/ADD_USER",
  ADD_USER_SUCCESS: "users/ADD_USER_SUCCESS",
  ADD_USER_FAIL: "users/ADD_USER_FAIL",
  OPEN_FORM: "users/OPEN_FORM",
  DELETE_USER: "users/DELETE_USER",
  CLOSE_FORM: "users/CLOSE_FORM"
};

/**
 * Action Crators
 */
export const Creators = {
  addUserRequest: userData => ({
    type: Types.ADD_USER_REQUEST,
    payload: { user: userData.username, geo: userData.userGeolocation }
  }),
  addUserSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: {
      user: data,
      modal: false
    }
  }),
  addUserFail: _ => ({
    type: Types.ADD_USER_FAIL,
    payload: { modal: true }
  }),
  deleteUser: id => ({
    type: Types.DELETE_USER,
    payload: { userid: id }
  }),
  openForm: geolocation => ({
    type: Types.OPEN_FORM,
    payload: { modal: true, geo: geolocation }
  }),
  closeForm: _ => ({
    type: Types.CLOSE_FORM,
    payload: { modal: false }
  })
};

/**
 * User Reducer
 */
const INITIAL_STATE = {
  users: [],
  modal: false,
  geo: null
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload.user],
        modal: action.payload.modal
      };
    case Types.ADD_USER_FAIL:
      return {
        ...state,
        modal: action.payload.modal
      };
    case Types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userid)
      };
    case Types.OPEN_FORM:
      return {
        ...state,
        modal: action.payload.modal,
        geo: action.payload.geo
      };
    case Types.CLOSE_FORM:
      return {
        ...state,
        modal: action.payload.modal
      };
    default:
      return state;
  }
}
