"use strict";

import {takeLatest} from "redux-saga/effects";
import {actions} from "./UserReducer";

function* attemptLogIn({payload: {email, password, rememberMe, reCaptchaToken, history}}: any): any {
    console.log(123);
}

function* attemptSignOut({payload: {history}}: any): any {

}

function* attemptGetUserProfile(): any {

}

function* userSaga(): any {
    yield takeLatest(actions.ATTEMPT_SIGN_OUT, attemptSignOut);
    yield takeLatest(actions.ATTEMPT_LOG_IN, attemptLogIn);
    yield takeLatest(actions.ATTEMPT_GET_USER_PROFILE, attemptGetUserProfile);
}

export default userSaga;
