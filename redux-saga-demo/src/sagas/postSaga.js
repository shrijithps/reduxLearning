import {fetchPostsSuccess, fetchPostsFailure, fetchPostsRequest} from "../features/user/postSlice";
import {call, put, takeLatest} from "redux-saga/effects";

function* fetchPostsSaga() {
    try{
        const response = yield call(fetch, "https://jsonplaceholder.typicode.com/posts");
        const data = yield response.json();
        yield put(fetchPostsSuccess(data));
    }
    catch(error){
        yield put(fetchPostsFailure(error.message));
    }
}

export default function* postSaga(){
    yield takeLatest(fetchPostsRequest.type, fetchPostsSaga);
}