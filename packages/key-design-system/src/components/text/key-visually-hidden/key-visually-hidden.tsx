import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'key-visually-hidden',
  styleUrl: 'key-visually-hidden.scss',
  shadow: true,
})
export class KeyVisuallyHidden {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
