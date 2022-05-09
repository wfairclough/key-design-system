import { Component, Event, Element, h, Host, Prop, EventEmitter } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../../utils/helpers';

export type ButtonVariation = 'solid' | 'plain' | 'outline';
export type Color = 'primary' | 'secondary' | 'tertiary' | 'destructive';
export type Size = 'default' | 'small' | 'large';

@Component({
  tag: 'key-button',
  styleUrl: 'key-button.scss',
  shadow: true,
})
export class KeyButton {
  private inheritedAttributes: Attributes = {};

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) variation: ButtonVariation = 'solid';
  @Prop({ reflect: true }) color: Color;
  @Prop({ reflect: true }) size: Size = 'default';
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) expand?: 'full' | 'block';

  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  @Event() keyFocus!: EventEmitter<void>;

  @Event() keyBlur!: EventEmitter<void>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private onFocus = () => {
    this.keyFocus.emit();
  };

  private onBlur = () => {
    this.keyBlur.emit();
  };


  render() {
    return <Host
      class={{
        'button-plain': this.variation === 'plain',
        'button-outline': this.variation === 'outline',
        'button-solid': this.variation === 'solid',
        'key-color': !!this.color,
        [`key-color-${this.color}`]: !!this.color,
        [`key-size-${this.size}`]: this.size !== 'default',
        'button-disabled': this.disabled,
      }}
      aria-disabled={this.disabled ? 'true' : null}>
      <button class="button-native"
          part="native"
          disabled={this.disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...this.inheritedAttributes}>
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
