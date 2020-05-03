import { config } from './common';
describe('config test for env', () => {
it('checks rest url of environment', () => {
   const rest_url = `${config().rest_url}`;
   console.log(rest_url)
   expect(rest_url).toEqual('http://localhost:5000');
  })
 })