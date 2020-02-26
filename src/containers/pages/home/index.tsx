"use strict";

import * as React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import selector, {IStoreProps} from "services/selector";

import {getStaticData} from "modules/application/ApplicationActions";

interface IHomePageProps extends IStoreProps {
    getStaticData: () => void,
}

const Container: any = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
`;

const Text: any = styled.h1`
    font-size: 50px;
`;

const StyledButton: any = styled.button`
    background: red;
`;

class HomePage extends React.PureComponent<IHomePageProps> {

    componentDidMount(): void {
        document.title = "Home";
    };

    handleButtonClick = () => {
        this.props.getStaticData();
    };

    render(): JSX.Element {

        return (
            <Container id="home">
                <Text>
                    Home Page
                </Text>
                <StyledButton onClick={this.handleButtonClick}>
                    Test Button
                </StyledButton>
            </Container>
        );
    }
}

const mapStateToProps: any = state => selector(state);

const mapDispatchToProps: any = dispatch => ({
    getStaticData: () => dispatch(getStaticData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
