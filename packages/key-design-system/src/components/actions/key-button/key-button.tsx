import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core';
import { Logger } from 'packages/key-design-system/src/utils/logger';

import { Color } from '../../../types/color';
import { Attributes, inheritAriaAttributes } from '../../../utils/helpers';

export type ButtonVariant = 'solid' | 'plain' | 'outline';

export type Size = 'default' | 'small' | 'large';

const log = Logger.create('KeyButton');

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
  @Prop({ reflect: true }) rounded = false;

  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  @Event() keyFocus!: EventEmitter<void>;

  @Event() keyBlur!: EventEmitter<void>;

  private inheritedAttributes: Attributes = {};

  connectedCallback() {
    this.checkSlottedSlots();
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidRender() {
    log.debug('componentDidRender');
    // const btnIcon = this.el?.querySelector('[slot="icon"]');
    // const btnStart = this.el?.querySelector('[slot="start"]');
    // const btnEnd = this.el?.querySelector('[slot="end"]');
    // this.hasSlottedIcon = !!btnIcon;
    // this.hasSlottedStart = !!btnStart;
    // this.hasSlottedEnd = !!btnEnd;
  }

  private onFocus = () => {
    this.keyFocus.emit();
  };

  private onBlur = () => {
    this.keyBlur.emit();
  };

  render() {
    const customColor = Color.isCustomColor(this.color);
    return (
      <Host
        style={{
          ...(customColor && { '--key-color-custom': this.color }),
        }}
        class={{
          'key-button': true,
          'button-plain': !this.variant || this.variant === 'plain',
          'button-outline': this.variant === 'outline',
          'button-solid': this.variant === 'solid',
          'key-color': !!this.color,
          [Color.classForColor(this.color)]: !!this.color,
          [`key-size-${this.size}`]: this.size !== 'default',
          'button-disabled': this.disabled,
          'button-rounded': this.rounded,
        }}
        aria-disabled={this.disabled ? 'true' : null}
      >
        <button
          class="button-native"
          part="native"
          disabled={this.disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...this.inheritedAttributes}
        >
          <span class="button-inner">
            <span class={'button-icon'}>
              <slot name="icon"></slot>
            </span>
            <slot name="start"></slot>
            <span class={'button-content'}>
              <slot></slot>
            </span>
            <slot name="end"></slot>
          </span>
        </button>
      </Host>
    );
  }

  private checkSlottedSlots() {
    const startEl = this.el.querySelector('[slot="start"]');
    if (startEl !== null) {
      this.el.classList.add('button-has-start-slot');
    }

    const endEl = this.el.querySelector('[slot="end"]');
    if (endEl !== null) {
      this.el.classList.add('button-has-end-slot');
    }

    const iconEl = this.el.querySelector('[slot="icon"]');
    if (iconEl !== null) {
      this.el.classList.add('button-has-icon-slot');
    }
  }
}
