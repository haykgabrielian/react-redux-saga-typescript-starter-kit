"use strict";

import * as React from "react";
import styled from "styled-components";

const Container: any = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
`;

const Text: any = styled.h1`
    font-size: 50px;
`;

export default class AboutPage extends React.PureComponent<{}> {

    componentDidMount(): void {
        document.title = "About";
    };

    render(): JSX.Element {
        return (
            <Container id="home">
                <Text>
                    About Page
                </Text>
            </Container>
        );
    }
}

