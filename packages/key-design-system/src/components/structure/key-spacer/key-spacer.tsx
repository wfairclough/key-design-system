import { Component, h, Host, Prop } from '@stencil/core';

export type SpacerSize =
  | 'zero'
  | 'xxxx-small'
  | 'xxx-small'
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'
  | 'xxxx-large';

export type SpacerDirection = 'horizontal' | 'vertical';

@Component({
  tag: 'key-spacer',
  styleUrl: 'key-spacer.scss',
  shadow: true,
})
export class KeySpacer {
  @Prop({ reflect: true }) size: SpacerSize = 'medium';
  @Prop({ reflect: true }) direction: SpacerDirection = 'horizontal';

  render() {
    return (
      <Host
        class={{
          [`size-${this.size}`]: !!this.size,
          [`direction-${this.direction}`]: !!this.direction,
        }}
      ></Host>
    );
  }
}
