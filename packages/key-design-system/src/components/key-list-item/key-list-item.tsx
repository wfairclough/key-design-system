import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'key-list-item',
  styleUrl: 'key-list-item.scss',
  shadow: true,
})
export class KeyListItem {
  @Prop() labelSize: number = 33;

  get dtFlexBasisStyle(): string {
    return `${this.labelSize}%`;
  }

  get ddFlexBasisStyle(): string {
    const ddSize = 100 - this.labelSize;
    return `${ddSize}%`;
  }

  private get styles() {
    return {
      '--key-list-item-dt-flex-basis': this.dtFlexBasisStyle,
      '--key-list-item-dd-flex-basis': this.ddFlexBasisStyle,
    };
  }

  render() {
    return <Host style={this.styles}>
      <dt>
        <slot name="label" />
      </dt>
      <dd>
        <slot name="value" />
      </dd>
    </Host>
  }
}
