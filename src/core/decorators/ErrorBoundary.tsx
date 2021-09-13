/* eslint no-console:0 */
import { Component, ErrorInfo, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import CenterAllAxes from '../layouts/center-all-axes';

type StateType = {
  error: null | Error;
  errorInfo: null | ErrorInfo;
};

type PropsType = {
  children: ReactNode;
};

export class ErrorBoundary extends Component<PropsType, StateType> {
  state = { error: null, errorInfo: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    console.log('error', error);
    console.log('errorInfo', errorInfo);
  }

  render() {
    const { children } = this.props;

    if (this.state.errorInfo) {
      return (
        <CenterAllAxes>
          <Wrapper>
            <h3>Упс, что-то пошло не так</h3>
            <h1>Пожалуйста перезагрузите страницу</h1>
            <p>{String(this.state.error)}</p>
          </Wrapper>
        </CenterAllAxes>
      );
    }
    return children;
  }
}

const Wrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 170px;
    color: ${theme.colors.red};
    text-align: center;
  `,
);
