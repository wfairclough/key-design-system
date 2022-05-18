import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'key-app-frame',
  styleUrl: 'key-app-frame.scss',
  shadow: true,
})
export class KeyAppFrame {
  render() {
    return (
      <Host
        class={{
          'key-app-frame': true,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
