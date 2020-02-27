"use strict";

import {createSelector} from "helpers/DataHelper";

const userDataSelector: any = state => state.get("userData");

const successUserNameSelector: any = createSelector(
    userDataSelector, (userData: any) => userData.userName
);

export interface IUserModuleProps {
    userName?: string;
}

export default (state) => ({
    userName: successUserNameSelector(state),
});
