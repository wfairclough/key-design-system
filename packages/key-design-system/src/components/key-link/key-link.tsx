import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'key-link',
  styleUrl: 'key-link.scss',
  shadow: true,
})
export class KeyLink {
  @Prop() url: string;

  get classes(): string {
    return [
      'key-link',
    ].join(' ');
  }

  render() {
    return <Host class={this.classes}>
      <a href={this.url}>
        <slot />
      </a>
    </Host>
  }
}
