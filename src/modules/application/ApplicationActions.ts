"use strict";

import {actions} from "modules/application/ApplicationReducer";

export interface IApplicationActions {
    type: string;
    payload?: {
        languages?: any[],
    };
}

export function getStaticData(): IApplicationActions {
    return {type: actions.ATTEMPT_GET_STATIC_DATA};
}

export function setStaticData({languages}: any): IApplicationActions {
    return {
        type: actions.SET_STATIC_DATA,
        payload: {languages}
    };
}
