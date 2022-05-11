import { Component, Event, Element, h, Host, Prop, EventEmitter } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../../../utils/helpers';
import { Color } from '../../../types/color';

export type ButtonVariant = 'solid' | 'plain' | 'outline';

export type Size = 'default' | 'small' | 'large';

@Component({
  tag: 'key-button',
  styleUrl: 'key-button.scss',
  shadow: true,
})
export class KeyButton {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) variant: ButtonVariant = 'solid';
  @Prop({ reflect: true }) color: Color;
  @Prop({ reflect: true }) size: Size = 'default';
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) expand?: 'full' | 'block';

  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  @Event() keyFocus!: EventEmitter<void>;

  @Event() keyBlur!: EventEmitter<void>;

  private inheritedAttributes: Attributes = {};
  private isCustomColor: boolean = false;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentWillRender() {
    this.isCustomColor = Color.isCustomColor(this.color);
  }

  private onFocus = () => {
    this.keyFocus.emit();
  };

  private onBlur = () => {
    this.keyBlur.emit();
  };


  render() {
    return <Host
      style={{
        ...(this.isCustomColor && { '--key-color-custom': this.color }),
      }}
      class={{
        'button-plain': this.variant === 'plain',
        'button-outline': this.variant === 'outline',
        'button-solid': this.variant === 'solid',
        'key-color': !!this.color,
        [Color.classForColor(this.color)]: !!this.color,
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
          <slot>Button</slot>
          <slot name="end"></slot>
        </span>
      </button>      
    </Host>;
  }
}
