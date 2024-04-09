import { jsxToString } from 'email-craft';

import { Template } from './test';

(async () => {
  const res = await jsxToString(<Template />);
  console.log(res);
})();
