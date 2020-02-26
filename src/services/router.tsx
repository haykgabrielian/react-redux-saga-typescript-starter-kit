"use strict";

import * as React from "react"
import Loadable from "react-loadable";
import {Route, Switch} from "react-router-dom";

import {ROUTER_CONFIG} from "configs/routerConfig";

const virtualRouter: any = {
    root: {
        path: "/",
        component: Loadable({
            loader: () => import("containers/pages/home"),
            loading: () => <span>Loading...</span>,
        }),
    },
    about: {
        path: "/about",
        component: Loadable({
            loader: () => import("containers/pages/about"),
            loading: () => <span>Loading...</span>,
        }),
    },
    init: {
        path: "*",
        component: Loadable({
            loader: () => import("containers/pages/pageNotFound"),
            loading: () => <span>Loading...</span>,
        }),
    },
};

const publicPages: any = (component: any, props?: any): any => {
    return React.createElement(component, props);
};

const routerInstance: any = [];
for (const item in virtualRouter) {
    if (virtualRouter.hasOwnProperty(item)) {
        const path: string = virtualRouter[item].path;
        const component: any = virtualRouter[item].component || null;
        const handleRender: any = (props: any): void => {
            return publicPages.call(null, component, props);
        };
        if (ROUTER_CONFIG[item]) {
            routerInstance.push(
                <Route
                    exact={true}
                    key={item}
                    path={path}
                    render={handleRender}
                />
            )
        }
    }
}

export default (): JSX.Element => {
    return (
        <Switch>
            {routerInstance}
        </Switch>
    )
};
