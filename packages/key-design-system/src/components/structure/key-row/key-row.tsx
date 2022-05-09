import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'key-row',
  styleUrl: 'key-row.scss',
  shadow: true,
})
export class KeyRow {
  
  @Prop({ reflect: true }) fit?: 'expand' | 'loose';

  render() {
    return <Host class={{
      'key-row': true,
      [`key-row-fit-${this.fit}`]: true,
    }}>
      <slot></slot>
    </Host>
  }
}
