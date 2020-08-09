import { put, takeLatest, all, fork, select } from "redux-saga/effects";
import { distance } from "../../utils/helpers";

const getCharacter = (state) => state.character;
const getDonut = (state) => state.donut;

function* fetchHits(action) {
  try {
    const character = yield select(getCharacter);
    const donut = yield select(getDonut);

    // if character hit target
    if (distance(character.position, donut.position, 1 / 4) < 6) {
      yield put({
        type: "EAT_SUCCESS",
      });
    } else {
      throw new Error("Could not eat donut");
    }
  } catch (e) {
    yield put({
      type: "EAT_FAILED",
      message: e.message,
    });
  }
}

// redux actions and its trigger saga functions
function* watchHits() {
  yield takeLatest("MOVE_CHAR", fetchHits);
}

// used fork for executing functions at the same time
export default function* rootSaga() {
  yield all([fork(watchHits)]);
}
