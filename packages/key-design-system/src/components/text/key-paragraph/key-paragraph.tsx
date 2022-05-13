import { Component, h, Host, Prop } from '@stencil/core';

export type ParagraphVariant = 'default' | 'intro';

@Component({
  tag: 'key-paragraph',
  styleUrl: 'key-paragraph.scss',
  shadow: true,
})
export class KeyParagraph {
  @Prop({ reflect: true }) variant: ParagraphVariant = 'default';

  render() {
    return <Host>
      <p class={{
        'key-paragraph': true,
        [this.variant]: !!this.variant,
      }}>
        <slot></slot>
      </p>
    </Host>;
  }
}
