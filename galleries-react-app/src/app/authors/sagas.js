import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { userService } from "../../services/UserService";
import { setUserGalleries } from "./slice";

function* getUserGalleries({ payload }) {
  const response = yield call(userService.get, payload);
  yield put(setUserGalleries(response));
}

function* getUserGalleriesSagaWatcher() {
  yield takeEvery("myAuthor/getUserGalleries", getUserGalleries);
}

export default function* rootAuthorSaga() {
  yield all([fork(getUserGalleriesSagaWatcher)]);
}
