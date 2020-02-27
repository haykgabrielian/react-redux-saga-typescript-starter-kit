"use strict";

import * as React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import selector, {IStoreProps} from "services/selector";

import {attemptLogIn} from "modules/user/UserActions";

interface IHomePageProps extends IStoreProps {
    attemptLogIn: (userName: string) => void,
    userName: string,
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
        this.props.attemptLogIn("saga button");
    };

    render(): JSX.Element {

        return (
            <Container id="home">
                <Text>
                    Home Page
                </Text>
                <StyledButton onClick={this.handleButtonClick}>
                    {this.props.userName}
                </StyledButton>
            </Container>
        );
    }
}

const mapStateToProps: any = state => selector(state);

const mapDispatchToProps: any = dispatch => ({
    attemptLogIn: (userName: string) => dispatch(attemptLogIn(userName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
