import { Component, h, Host, Prop } from '@stencil/core';
import { Logger } from '../../../utils/logger';
import { Color } from '../../../types/color';

const log = Logger.create('KeyBanner');

@Component({
  tag: 'key-banner',
  styleUrl: 'key-banner.scss',
  shadow: true,
})
export class KeyBanner {
  
  @Prop() header: string;
  
  @Prop() content: string;

  @Prop() expanded: boolean;
  
  @Prop() color: Color = 'banner-default';

  private dismiss = () => {
    log.debug(`Dismiss`);
  };

  render() {
    return <Host class={{
      'key-banner': true,
      [Color.classForColor(this.color)]: !!this.color,
      'expanded': this.expanded,
    }}>
      <div class="banner-container">
        <div class="ribbon">
          <slot name="icon"></slot>
        </div>
        <div class="content">
          <slot name="header">
            <key-heading level="4">{ this.header }</key-heading>
          </slot>
          <slot name="content">
            <key-paragraph>{ this.content }</key-paragraph>
          </slot>
          <slot name="actions"></slot>
        </div>
        <div class="dismiss">
          <key-button rounded onClick={this.dismiss} variant="plain">
            <key-icon slot="icon" faIcon={'fa-xmark'}></key-icon>
          </key-button>
        </div>
      </div>
    </Host>
  }
}
