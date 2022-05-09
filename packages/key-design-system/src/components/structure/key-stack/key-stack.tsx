import { Component, Element, h, Host, Prop } from '@stencil/core';

export type MainAxisArrangement = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type CrossAxisArrangement = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

@Component({
  tag: 'key-stack',
  styleUrl: 'key-stack.scss',
  shadow: true,
})
export class KeyStack {
  @Element() host!: HTMLElement;
  
  @Prop({ reflect: true }) axis: 'vertical' | 'horizontal' = 'horizontal';
  @Prop({ reflect: true }) mainAxisArrangement: MainAxisArrangement = 'start';
  @Prop({ reflect: true }) crossAxisArrangement: CrossAxisArrangement = 'start';
  @Prop({ reflect: true }) fit?: 'tight' | 'expand' = 'tight';
  @Prop({ reflect: true }) crossfit?: 'tight' | 'expand' = 'tight';

  render() {
    return <Host class={{
      'key-stack': true,
      [`key-stack-axis-${this.axis}`]: true,
      [`key-stack-fit-${this.axis}-${this.fit}`]: true,
      [`key-stack-crossfit-${this.axis}-${this.crossfit}`]: true,
      [`key-stack-main-axis-arrange-${this.mainAxisArrangement}`]: true,
      [`key-stack-cross-axis-arrange-${this.crossAxisArrangement}`]: true,
    }}>
      <slot></slot>
    </Host>
  }
}
