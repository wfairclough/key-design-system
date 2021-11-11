import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'key-list-item',
  styleUrl: 'list-item.scss',
  shadow: true,
})
export class ListItem {
  @Prop() labelSize: number = 33;

  render() {
    return <Host style={this.styles}>
      <dt class="key-label">
        <slot name="label" />
      </dt>
      <dd class="key-value">
        <slot name="value" />
      </dd>
    </Host>
  }

  private get styles() {
    return {
      '--key-list-item-dt-flex-basis': this.dtFlexBasisStyle,
      '--key-list-item-dd-flex-basis': this.ddFlexBasisStyle,
    };
  }

  private get dtFlexBasisStyle(): string {
    return `${this.labelSize}%`;
  }

  private get ddFlexBasisStyle(): string {
    const ddSize = 100 - this.labelSize;
    return `${ddSize}%`;
  }
}
