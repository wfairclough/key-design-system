import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'key-label',
  styleUrl: 'key-label.scss',
  shadow: false,
})
export class KeyLabel {
  render() {
    return <Host class="key-label">
      <label>
        <slot></slot>
      </label>
    </Host>
  }
}
