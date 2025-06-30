import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure,
} from '../features/user/userSlice';

function* fetchUsersSaga() {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
        const data = yield response.json();
        yield put(fetchUsersSuccess(data));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}

export default function* userSaga() {
    yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}
