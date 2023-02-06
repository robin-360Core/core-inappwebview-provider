import {InAppProvider} from './InAppProvider';
import {ISetup} from '@robincore/flutter-dapp-provider';
import {IPayload} from '@robincore/flutter-dapp-provider/build/bridge/IParams';

describe('InAppProvider', () => {
  describe('test inAppProvider class with injector', () => {
    it('should run without any error', async () => {
      const setup: ISetup = {
        currentAddress: '',
        currentProvider: 'https://data-seed-prebsc-2-s3.binance.org:8545',
        chainId: '0x61',
      };
      const inAppProvider = new InAppProvider(setup);
      const payload: IPayload = {
        method: 'web3_clientVersion',
        params: [],
        id: 0,
        jsonrpc: '',
      };

      const req = await inAppProvider.request(payload);

      console.log(req);
    });
  });
});
