import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import postcssImport from 'postcss-import';
import tailwindCss from 'tailwindcss';
import colors from 'tailwindcss/colors';
import autoPrefixer from 'autoprefixer';

import tailwind from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'key-design-system',
  taskQueue: 'async',
  plugins: [
    sass(),
    tailwind({
      postcss: {
        plugins: [
          postcssImport,
          tailwindCss,
          autoPrefixer,
        ],
      },
      tailwindConf: {
        theme: {
          colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            suitespot: {
              50: '#F0FDFA',
              100: '#002F2F',
              200: '#105454',
              300: '#256E6E',
              400: '#008989',
              500: '#119693',
              600: '#10A8A8',
              700: '#0CBABA',
              800: '#00C1C1',
            }
          }
        }
      }
    }),
  ],
  globalStyle: 'src/global.scss',
  devServer: {
    reloadStrategy: 'pageReload'
  },
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
