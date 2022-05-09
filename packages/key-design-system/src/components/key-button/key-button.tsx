import { Component, h, Host, Prop } from '@stencil/core';

export type ButtonVariation = 'solid' | 'plain' | 'outline';
export type Color = 'primary' | 'secondary' | 'tertiary' | 'destructive';
export type Size = 'default' | 'small' | 'large';

@Component({
  tag: 'key-button',
  styleUrl: 'key-button.scss',
  shadow: true,
})
export class KeyButton {

  @Prop({ reflect: true }) variation: ButtonVariation = 'solid';
  @Prop({ reflect: true }) color: Color;
  @Prop({ reflect: true }) size: Size = 'default';

  render() {
    return <Host class={{
      'button-plain': this.variation === 'plain',
      'button-outline': this.variation === 'outline',
      'button-solid': this.variation === 'solid',
      'key-color': !!this.color,
      [`key-color-${this.color}`]: !!this.color,
      [`key-size-${this.size}`]: this.size !== 'default',
    }}>
      <button class="button-native" part="native">
        <span class="button-inner">
          <slot name="icon"></slot>
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </span>
      </button>      
    </Host>;
  }
}
