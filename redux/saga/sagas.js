import { takeLatest, put, all } from 'redux-saga/effects';
import { CHANGE_LANGUAGE } from '../action/actions';

function* changeLanguageSaga(action) {
  const { language } = action.payload;

  yield put({ type: 'LANGUAGE_CHANGED', language });
}

function* watchLanguageChange() {
  yield takeLatest(CHANGE_LANGUAGE, changeLanguageSaga);
}

export default function* rootSaga() {
  yield all([watchLanguageChange()]);
}
