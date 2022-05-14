import { renderVdom, registerHost, getHostRef } from '@stencil/core/internal/client';

import { defineCustomElements } from '../../../dist/packages/key-design-system/loader';

defineCustomElements();

const [headEl] = document.getElementsByTagName('head');
function addHeadLink(href, rel = 'stylesheet') {
  const linkEl = document.createElement('link');
  linkEl.href = href;
  linkEl.rel = rel;
  headEl.appendChild(linkEl);
}
function addHeadScript(src, crossorigin = 'anonymous') {
  const scriptEl = document.createElement('script');
  scriptEl.src = src;
  scriptEl.crossOrigin = crossorigin;
  headEl.appendChild(scriptEl);
}

addHeadLink('/key-design-system/key-design-system.css');
// addHeadScript('https://kit.fontawesome.com/a30ba47e78.js');

const rootElement = document.getElementById('root');
const storyRoot = document.createElement('div');
storyRoot.className = 'story-root';
storyRoot.style.width = '100%';
storyRoot.style.height = '100%';
const faKit = document.createElement('key-font-awesome-kit-provider');
// faKit.faKitUrl = 'https://kit.fontawesome.com/a30ba47e78.js';
faKit.faVersion = 'v6.1.1';
faKit.faKitToken = 'a30ba47e78';
faKit.appendChild(storyRoot);
rootElement.parentElement.appendChild(faKit);

registerHost(storyRoot, { $flags$: 0, $tagName$: 'story-root' })
const hostRef = getHostRef(storyRoot);

export const decorators = [
  (Story) => {
    renderVdom(hostRef, Story());
    return '<div />';
  }
];
