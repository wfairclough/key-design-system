// import {
//   renderVdom,
//   registerHost,
//   getHostRef,
// } from '@stencil/core/internal/client';

import '../../../dist/packages/key-design-system/dist/key-design-system/key-design-system.css';
import { defineCustomElements } from '../../../dist/packages/key-design-system/loader';

defineCustomElements();

// const rootElement = document.getElementById('root');
// const globalStyleEl = document.createElement('style');
// globalStyleEl.innerHTML = globalStyles;
// debugger;
// rootElement.parentElement.appendChild(globalStyleEl);
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
