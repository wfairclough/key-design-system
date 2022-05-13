import { Component, ComponentWillLoad, h, Host, Prop } from '@stencil/core';
import { addHeadScript } from '../../../utils/helpers';

let id = 1;

@Component({
  tag: 'key-font-awesome-kit',
  shadow: true,
})
export class KeyFontAwesomeKit implements ComponentWillLoad {
  
  @Prop({ reflect: true }) faKitUrl: string;

  componentWillLoad(): void | Promise<void> {
    addHeadScript({
      src: this.faKitUrl,
      crossOrigin: 'anonymous',
      id: 'key-fa-kit-' + id++,
    });
  }

  render() {
    return <Host></Host>;
  }
}
