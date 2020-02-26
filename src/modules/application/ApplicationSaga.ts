"use strict";

import {takeLatest} from "redux-saga/effects";
import {actions} from "modules/application/ApplicationReducer";

function* attemptGetStaticData(): any {
    console.log(123);
}

function* applicationSaga(): any {
    yield takeLatest(actions.ATTEMPT_GET_STATIC_DATA, attemptGetStaticData);
}

export default applicationSaga;
