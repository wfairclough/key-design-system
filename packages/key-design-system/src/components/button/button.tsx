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

  private get classes(): string {
    return [
      'key-button',
      `key-button-${this.variation}`,
      ...(this.expanded ? ['key-expanded'] : []),
    ].join(' ');
  }

  render() {
    console.log(`Render key-button`, this.expanded);
    return <Host class={this.classes}>
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
