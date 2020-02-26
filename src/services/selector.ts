"use strict";

import ApplicationSelector, {IApplicationModuleProps} from "modules/application/ApplicationSelector";
import UserSelector, {IUserModuleProps} from "modules/user/UserSelector";

export interface IStoreProps extends IUserModuleProps, IApplicationModuleProps {
}

export default (state): any => {
    return {
        ...UserSelector(state),
        ...ApplicationSelector(state),
    }
};
