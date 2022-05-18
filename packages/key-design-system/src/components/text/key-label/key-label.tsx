import { Component, h, Host, Prop } from '@stencil/core';
import { Color } from '../../../types/color';

@Component({
  tag: 'key-label',
  styleUrl: 'key-label.scss',
  shadow: false,
})
export class KeyLabel {
  @Prop() color: Color;

  render() {
    return (
      <Host
        class={{
          'key-label': true,
          [Color.classForColor(this.color)]: !!this.color,
        }}
      >
        <label>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
