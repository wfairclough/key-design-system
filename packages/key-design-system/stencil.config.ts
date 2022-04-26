import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import postcssImport from 'postcss-import';
import tailwindCss from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
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
          extend: {
            fontFamily: {
              sans: ['Inter var', ...((defaultTheme.fontFamily as any)?.sans ?? [] )],
            },
            colors: {
              ...defaultTheme.colors,
              transparent: 'transparent',
              current: 'currentColor',
              primary: {
                50: '#F0FDFA',
                100: '#CCFBF1',
                200: '#99F6E4',
                300: '#5EEAD4',
                400: '#2DD4BF',
                500: '#14B8A6',
                600: '#008989',
                700: '#0F766E',
                800: '#115E59',
                900: '#134E4A',
              },
              secondary: {
                50: '#FFFBEB',
                100: '#FEF3C7',
                200: '#FDE68A',
                300: '#FCD34D',
                400: '#FBBF24',
                500: '#F59E0B',
                600: '#D97706',
                700: '#B45309',
                800: '#92400E',
                900: '#78350F',
              },
              tertiary: {
                50: '#F0F9FF',
                100: '#E0F2FE',
                200: '#BAE6FD',
                300: '#7DD3FC',
                400: '#38BDF8',
                500: '#0EA5E9',
                600: '#0284C7',
                700: '#0369A1',
                800: '#075985',
                900: '#0C4A6E',
              },
              indigo: {
                50: '#EEF2FF',
                100: '#E0E7FF',
                200: '#C7D2FE',
                300: '#A5B4FC',
                400: '#818CF8',
                500: '#6366F1',
                600: '#4F46E5',
                700: '#4338CA',
                800: '#3730A3',
                900: '#312E81',
              },
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
