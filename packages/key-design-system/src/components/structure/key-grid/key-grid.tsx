import { Component, Element, Host, Prop, h } from '@stencil/core';

import { CrossAxisAlignment, MainAxisAlignment } from './alignments';
import { Fit } from './fit';
import { GridAxis } from './grid-axis';

@Component({
  tag: 'key-grid',
  styleUrl: 'key-grid.scss',
  shadow: true,
})
export class KeyGrid {
  @Element() host!: HTMLElement;
  
  @Prop({ reflect: true }) axis: GridAxis = 'horizontal';
  @Prop({ reflect: true }) mainAxisAlignment: MainAxisAlignment = 'start';
  @Prop({ reflect: true }) crossAxisAlignment: CrossAxisAlignment = 'start';
  @Prop({ reflect: true }) fit: Fit = 'tight';
  @Prop({ reflect: true }) crossfit: Fit = 'tight';
  @Prop({ reflect: true }) wrap: boolean = false;

  render() {
    return <Host class={{
      'key-grid': true,
      'key-wrap': this.wrap,
      [`key-axis-${this.axis.substring(0, 1)}`]: true,
      [`key-fit-${this.axis.substring(0, 1)}-${this.fit}`]: true,
      [`key-crossfit-${this.axis.substring(0, 1)}-${this.crossfit}`]: true,
      [`key-main-axis-arrange-${this.mainAxisAlignment}`]: true,
      [`key-cross-axis-arrange-${this.crossAxisAlignment}`]: true,
    }}>
      <slot></slot>
    </Host>
  }
}
