import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'key-layout',
  styleUrl: 'key-layout.scss',
  shadow: true,
})
export class KeyLayout {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
