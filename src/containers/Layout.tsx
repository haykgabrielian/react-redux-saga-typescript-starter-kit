"use strict";

import * as React from "react";
import { History, Location } from "history";

import {appRouter} from "services/index";

import Header from "components/Header";

interface ILayoutProps {
    location: Location,
    history: History,
}

export default class Layout extends React.Component<ILayoutProps> {

    render(): JSX.Element {
        const routes: any = appRouter();
        const {location: {pathname}} = this.props;

        return (
            <div id="app">
                <Header pathname={pathname}/>
                {routes}
            </div>
        );
    }
}
