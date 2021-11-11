import { Component, h, Prop } from '@stencil/core';

type KeyListVariation = 'default' | 'stripped';

@Component({
  tag: 'key-list',
  styleUrl: 'list.scss',
  shadow: true,
})
export class List {
  /**
   * The first name
   */
  @Prop() variation: KeyListVariation = 'default';

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  render() {
    return <dl class={ `key-list key-list-${this.variation}` }>
      <slot />
    </dl>;
  }
}
