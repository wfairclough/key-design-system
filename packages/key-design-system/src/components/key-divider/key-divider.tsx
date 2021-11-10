import { Component, h, Prop } from '@stencil/core';

type KeyDividerMargin = 'auto' | 'none' | 'small';

@Component({
  tag: 'key-divider',
  styleUrl: 'key-divider.scss',
  shadow: true,
})
export class KeyDivider {
  @Prop() margin: KeyDividerMargin = 'auto';

  render() {
    return <div class={`key-divider key-divider-margin-${this.margin}`}></div>;
  }
}
