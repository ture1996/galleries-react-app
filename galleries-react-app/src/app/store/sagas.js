import gallerySaga from "../galleries/sagas";
import authorSaga from "../authors/sagas";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(authorSaga)]);
  yield all([fork(gallerySaga)]);
}
