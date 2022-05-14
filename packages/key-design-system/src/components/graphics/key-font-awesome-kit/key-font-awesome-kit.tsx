import { Component, ComponentWillLoad, h, Host, Prop } from '@stencil/core';

import { addHeadScript } from '../../../utils/helpers';
import faStore from './key-fa-store';

let id = 1;

@Component({
  tag: 'key-font-awesome-kit-provider',
  shadow: true,
})
export class KeyFontAwesomeKitProvider implements ComponentWillLoad {
  
  @Prop({ reflect: true }) faKitUrl: string;

  @Prop() faVersion: string = 'v6.1.1';

  @Prop() faKitToken: string;

  componentWillLoad(): void | Promise<void> {
    if (this.faKitUrl) {
      addHeadScript({
        src: this.faKitUrl,
        crossOrigin: 'anonymous',
        id: 'key-fa-kit-' + id++,
      });
    }
    if (this.faKitToken) {
      faStore.config = {
        version: this.faVersion ?? 'v6.1.1',
        token: this.faKitToken,
      };
    }
  }

  render() {
    return <Host><slot></slot></Host>;
  }
}
