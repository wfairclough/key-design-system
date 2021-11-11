import { Component, h, Host, Prop } from '@stencil/core';
import { ButtonVariation } from './button-variation';

@Component({
  tag: 'key-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Prop() variation: ButtonVariation = ButtonVariation.Plain;

  @Prop() expanded: boolean = false;

  render() {
    console.log(`Render key-button`, this.expanded);
    return <Host class={{
      'key-button': true,
      [`key-button-${this.variation}`]: true,
      'key-expanded': this.expanded,
    }}>
      <button part="native">
        <slot name="leading" />
        <span class="content">
          <slot />
        </span>
        <slot name="trailing" />
      </button>
    </Host>;
  }
}
