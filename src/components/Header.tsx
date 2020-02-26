"use strict";

import * as React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components"

import {HEADER_NAVIGATION, PAGE_NAME} from "configs/constants";
import {ROUTER_CONFIG} from "configs/routerConfig";
import logo from "assets/images/logo.png";

interface IHeaderProps {
    pathname: string,
}

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid green;
    z-index: 99;
`;

const StyledNavLink = styled(NavLink)`
    &.active {
      color: red;
    }
`;

const Navigation = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;

export default class Header extends React.Component<IHeaderProps> {

    get headerItems(): any {
         const headerItems: any = [];
         for (const item in HEADER_NAVIGATION) {
            if (HEADER_NAVIGATION.hasOwnProperty(item)) {
                 const value: string = HEADER_NAVIGATION[item];
                 if (ROUTER_CONFIG[item]) {
                    headerItems.push(
                        <li key={item}>
                            <StyledNavLink to={value} activeClassName="active" exact >
                                {PAGE_NAME[value]}
                            </StyledNavLink>
                        </li>
                    );
                }
            }
        }
         return headerItems;
    }

    render(): JSX.Element {

        return (
            <StyledHeader className="header">
                <img src={logo} height={48} />
                <Navigation>
                    {this.headerItems}
                </Navigation>
            </StyledHeader>
        );
    }
}
