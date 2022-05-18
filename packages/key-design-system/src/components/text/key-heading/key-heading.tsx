import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'key-heading',
  styleUrl: 'key-heading.scss',
  shadow: true,
})
export class KeyHeading {
  @Prop() level: string = '1';

  render() {
    const HTag = `h${this.level}`;
    return (
      <HTag>
        <slot></slot>
      </HTag>
    );
  }
}
