import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import SampleContract from './../../../api/ethereum/SampleContract';
import web3 from './../../../api/ethereum/web3';

function FieldGroup({
  id, label, help, ...props
}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class EthSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contribution: '0',
      message: '',
    };
  }

  onSubmit = async event => {
        event.preventDefault();
        this.setState({ message: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            
            await SampleContract.methods
                .contribute(this.state.contribution)
                .send({
                    from: accounts[0]
            });
            this.setState({ message: `Contributed ${this.state.contribution} from Account ${accounts[0]}` });

        } catch (err) {
            this.setState({ message: err.message });
        }
  };


  render() {
    return (
      <div>
        <form>
          <FieldGroup
            id="contribution"
            label="Contribution"
            type="text"
            value={this.state.contribution}
            onChange={event =>
                   this.setState({ contribution: event.target.value })}
          />
          <Button type="submit" onClick={this.onSubmit}>Contribute</Button>
        </form>
          {this.state.message}
      </div>
    );
  }
}

export default EthSubmitter;
