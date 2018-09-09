import { drizzleConnect } from 'drizzle-react'
import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../styles.js'

import Subtitle from './Subtitle.js'

const StyledLoadingContainer = styled.main`
  background-color: ${colors.dark};
  position: absolute;
  margin: auto;
  top:0;
  left:0;
  bottom:0;
  right:0;
  width: 400px;
  height: 40px;
  text-align: center;
`

const StyledLoadingIndicatorContainer = styled.div`
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ color }) => color };
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    transition: all 0.1s ease;
    -webkit-transition: all 0.1s ease;
    -moz-transition: all 0.1s ease;
    -o-transition: all 0.1s ease;
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
  }
  @keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
  }
  @keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}

`

/*
 * Create component.
 */

class LoadingContainer extends Component {
  render() {
    if (this.props.web3.status === 'failed')
    {
      if (this.props.errorComp) {
        return this.props.errorComp
      }

      return(
        <StyledLoadingContainer className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>⚠️</h1>
              <p>This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist or Parity.</p>
            </div>
          </div>
        </StyledLoadingContainer>
      )
    }

    if (this.props.web3.status === 'initialized' && Object.keys(this.props.accounts).length === 0)
    {
      return(
        <StyledLoadingContainer className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <StyledLoadingIndicatorContainer color={colors.purple}>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              </StyledLoadingIndicatorContainer>
              <Subtitle>
                Waiting for Web3...
              </Subtitle>
            </div>
          </div>
        </StyledLoadingContainer>
      )
    }
    if (this.props.drizzleStatus.initialized)
    {
      return Children.only(this.props.children)
    }
    if (this.props.loadingComp) {
      return this.props.loadingComp
    }
    return(
      <StyledLoadingContainer className="container loading-screen">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <StyledLoadingIndicatorContainer color={colors.purple}>
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </StyledLoadingIndicatorContainer>
            <Subtitle>
              Loading dapp...
            </Subtitle>
          </div>
        </div>
      </StyledLoadingContainer>
    )
  }
}
LoadingContainer.contextTypes = {
  drizzle: PropTypes.object
}
/*
 * Export connected component.
 */
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    web3: state.web3
  }
}

export default drizzleConnect(LoadingContainer, mapStateToProps)
