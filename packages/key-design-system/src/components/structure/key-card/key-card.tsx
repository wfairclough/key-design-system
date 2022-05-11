import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'key-card',
  styleUrl: 'key-card.scss',
  shadow: true,
})
export class KeyCard {
  @Prop() header: string;
  @Prop() content: string;

  render() {
    return <Host class={{
      'key-card': true,
    }}>
      <div class="header">
        <slot name="header">
          { this.header }
        </slot>
      </div>
      <div class="content">
        <slot>
          { this.content }
        </slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </Host>;
  }
}
