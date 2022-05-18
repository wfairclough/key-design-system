import { Component, h, Host, Prop } from '@stencil/core';

export type ParagraphVariant = 'default' | 'intro';
export type ParagraphSize = 'default' | 'small' | 'large';

@Component({
  tag: 'key-paragraph',
  styleUrl: 'key-paragraph.scss',
  shadow: true,
})
export class KeyParagraph {
  @Prop({ reflect: true }) variant: ParagraphVariant = 'default';
  @Prop({ reflect: true }) size: ParagraphSize = 'default';

  render() {
    return (
      <Host>
        <p
          class={{
            'key-paragraph': true,
            [this.variant]: !!this.variant,
            [`size-${this.size}`]: !!this.size,
          }}
        >
          <slot></slot>
        </p>
      </Host>
    );
  }
}
