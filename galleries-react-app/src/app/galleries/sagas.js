import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { galleryService } from "../../services/GalleryService";
import { setAllGalleries, setSingleGallery } from "./slice";

function* getGalleries() {
  const response = yield call(galleryService.getAll);
  yield put(setAllGalleries(response));
}

function* getGallery({ payload }) {
  const response = yield call(galleryService.get, payload);
  yield put(setSingleGallery(response));
}

function* getGalleriesSagaWatcher() {
  yield takeEvery("myGalleries/getAllGalleries", getGalleries);
}

function* getGallerySagaWatcher() {
  yield takeEvery("myGalleries/getSingleGallery", getGallery);
}

export default function* rootGalleriesSaga() {
  yield all([fork(getGalleriesSagaWatcher), fork(getGallerySagaWatcher)]);
}
