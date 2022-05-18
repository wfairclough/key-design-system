import { Component, h, Host, Prop } from '@stencil/core';

export type SpinnerSize = 'large' | 'medium' | 'small';

@Component({
  tag: 'key-spinner',
  styleUrl: 'key-spinner.scss',
  shadow: true,
})
export class KeySpinner {
  @Prop({ reflect: true }) size: SpinnerSize = 'medium';

  render() {
    return (
      <Host>
        <div
          class={{ 'key-spinner': true, [`size-${this.size}`]: !!this.size }}
        ></div>
      </Host>
    );
  }
}
