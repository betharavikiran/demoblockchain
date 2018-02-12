import React, { Component } from 'react';
import SampleContract from './../../../api/ethereum/SampleContract';
import Web3 from './../../../api/ethereum/web3';

// SampleContract.events.Contribution({ fromBlock: 0, toBlock: 'latest' }, (error, event) => { console.log(error); console.log(event); });
// https://github.com/MetaMask/metamask-extension/issues/2601

class EthListener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalContributions: '0',
      gasPrice: '0',
      gasEstimate: '0',
      message: '',
    };
  }

  componentDidMount() {
    this.getToContributions();
    this.getGasPrice();

    clearInterval(this.timer);
    this.timer = setInterval(this.getToContributions.bind(this), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  async getToContributions() {
    const totalContributions = await SampleContract.methods.getTotalContribution().call();
    await this.setStateAsync({ totalContributions });
  }

  async getGasPrice() {
    const gasPrice = await Web3.eth.getGasPrice();
    await this.setStateAsync({ gasPrice });
  }

  async getGasEstimate() {
    const gasEstimate = await Web3.eth.estimateGas();
    await this.setStateAsync({ gasEstimate });
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  render() {
    return (
      <div>
        <div>
          <p>Gas Price {this.state.gasPrice}</p>
          <p>Gas Estimate {this.state.gasEstimate}</p>
        </div>
        <hr />
        <div>
          <h3>Total Contribution {this.state.totalContributions}</h3>
        </div>
      </div>
    );
  }
}

export default EthListener;
