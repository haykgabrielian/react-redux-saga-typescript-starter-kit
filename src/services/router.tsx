"use strict";

import * as React from "react"
import {Route, Switch} from "react-router-dom";

import {ROUTER_CONFIG} from "configs/routerConfig";

import HomePage from "containers/pages/home";
import About from "containers/pages/about";

const router: any = {
    root: {
        path: "/",
        component: HomePage
    },
    about: {
        path: "/about",
        component: About
    },
    init: {
        path: "*",
        component: HomePage
    },
};

const publicPages: any = (component: any, props?: any): any => {
    return React.createElement(component, props);
};

const routerInstance: any = [];
for (const item in router) {
    if (router.hasOwnProperty(item)) {
        const path: string = router[item].path;
        const component: any = router[item].component || null;
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
