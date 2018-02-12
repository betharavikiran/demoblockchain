import web3 from './web3';
import SampleContract from './../../../contacts/contracts/SampleContract.json';

const instance = new web3.eth.Contract(
  SampleContract.abi,
  '0xf04fbe16e47b695e49257e6eef2ae6182d372e2b',
);


export default instance;
