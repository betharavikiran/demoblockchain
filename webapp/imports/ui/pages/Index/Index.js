import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import EthSubmitter from './../../components/EthSubmitter';
import EthListener from './../../components/EthListener';

import './Index.scss';

const Index = () => (
  <div className="Index">
    <Grid>
      <Row>
        <Col sm={6}>
          <EthSubmitter />
        </Col>
        <Col sm={6}>
          <EthListener />
        </Col>
      </Row>
    </Grid>
    <footer>
      <p>Need help and want to stay accountable building your product? <a href="http://cleverbeagle.com?utm_source=pupappindex&utm_campaign=oss">Check out Clever Beagle</a>.</p>
    </footer>
  </div>
);

export default Index;
