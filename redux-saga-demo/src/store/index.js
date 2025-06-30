import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from '../features/user/userSlice';
import postReducer from '../features/user/postSlice';
import userSaga from '../sagas/userSaga';
import postSaga from "../sagas/postSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);
sagaMiddleware.run(postSaga);

export default store;
