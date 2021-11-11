import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'key-design-system',
  taskQueue: 'async',
  plugins: [sass()],
  globalStyle: 'src/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/packages/key-design-system/dist',
    },
    {
      type: 'www',
      dir: '../../dist/packages/key-design-system/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
