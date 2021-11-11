import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'key-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {
  @Prop() url: string;

  render() {
    return (
      <Host class={{ 'key-link': true }}>
        <a href={this.url}>
          <slot />
        </a>
      </Host>
    );
  }
}
