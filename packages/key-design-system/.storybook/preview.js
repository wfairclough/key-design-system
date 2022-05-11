// import {
//   renderVdom,
//   registerHost,
//   getHostRef,
// } from '@stencil/core/internal/client';

// import '../../../dist/packages/key-design-system/dist/key-design-system/key-design-system.css';
// import { defineCustomElements } from '../../../dist/packages/key-design-system/loader';

// defineCustomElements();

// const rootElement = document.getElementById('root');
// const storyRoot = document.createElement('div');
// storyRoot.className = 'story-root';
// rootElement.parentElement.appendChild(storyRoot);

// registerHost(storyRoot, { $flags$: 0, $tagName$: 'story-root' });
// const hostRef = getHostRef(storyRoot);

// export const decorators = [
//   (Story) => {
//     renderVdom(hostRef, Story());
//     return '<div />';
//   },
// ];

import { renderVdom, registerHost, getHostRef } from '@stencil/core/internal/client';

import { defineCustomElements } from '../../../dist/packages/key-design-system/loader';

defineCustomElements();

const [headEl] = document.getElementsByTagName('head');
const globalStyleLink = document.createElement('link');
globalStyleLink.href = '/key-design-system/key-design-system.css';
globalStyleLink.rel = 'stylesheet';
headEl.appendChild(globalStyleLink);

const rootElement = document.getElementById('root');
const storyRoot = document.createElement('div');
rootElement.parentElement.appendChild(storyRoot);

registerHost(storyRoot, { $flags$: 0, $tagName$: 'story-root' })
const hostRef = getHostRef(storyRoot);

export const decorators = [
  (Story) => {
    renderVdom(hostRef, Story());
    return '<div />';
  }
];
