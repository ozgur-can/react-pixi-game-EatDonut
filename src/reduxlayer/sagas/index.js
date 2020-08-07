import { put, takeLatest, all, fork, select } from "redux-saga/effects";
import { distance } from "../../utils/helpers";

const getCharacter = (state) => state.character;
const getTarget = (state) => state.target;

function* fetchHits(action) {
  try {
    const character = yield select(getCharacter);
    const target = yield select(getTarget);

    if (distance(character, target) > 0 && distance(character, target) < 10)
      yield put({
        type: "HIT_SUCCESS",
        payload: "foo",
      });
    else {
      throw new Error("message");
    }
  } catch (e) {
    yield put({
      type: "HIT_FAILED",
      message: e.message,
      payload: "baz",
    });
  }
}

// redux actions and its trigger saga functions
function* watchHits() {
  yield takeLatest("THROW_CHAR", fetchHits);
}

// used fork for executing functions at the same time
export default function* rootSaga() {
  yield all([fork(watchHits)]);
}
