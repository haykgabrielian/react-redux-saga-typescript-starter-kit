"use strict";

import {createSelector} from "helpers/DataHelper";

const applicationDataSelector: any = state => state.get("applicationData");

const languagesSelector: any = createSelector(
    applicationDataSelector, (applicationData: any) => applicationData.languages
);

export interface IApplicationModuleProps {
    languages?: any,
}

export default (state) => {
    return {
        languages: languagesSelector(state),
    }
};
