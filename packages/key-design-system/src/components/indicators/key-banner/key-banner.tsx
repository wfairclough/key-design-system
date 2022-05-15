import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { Logger } from '../../../utils/logger';
import { Color } from '../../../types/color';

const log = Logger.create('KeyBanner');

@Component({
  tag: 'key-banner',
  styleUrl: 'key-banner.scss',
  shadow: true,
})
export class KeyBanner {

  @Element() el!: HTMLElement;
  
  @Prop() header: string;
  
  @Prop() content: string;

  @Prop() expanded: boolean;
  
  @Prop() color: Color;

  @Event() keyDismiss: EventEmitter<void>;

  private dismiss = () => {
    log.debug(`Dismiss`);
    this.el?.parentElement?.removeChild(this.el);
    this.keyDismiss.emit();
  };

  connectedCallback() {
    log.debug('connectedCallback', this.el);
    this.checkSlottedSlots();
  }

  componentWillUpdate() {
    log.debug('componentWillUpdate');
  }

  render() {
    const color = this.color || 'banner-default';
    return <Host class={{
      'key-banner': true,
      [Color.classForColor(color)]: !!color,
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
            { this.content && <key-paragraph>{ this.content }</key-paragraph>}
          </slot>
          <slot name="actions"></slot>
        </div>
        <div class="dismiss">
          <key-button rounded onClick={this.dismiss} variant="plain" tabIndex={-1}>
            <key-icon slot="icon" faWeight={'fa-thin'} faIcon={'fa-xmark'}></key-icon>
          </key-button>
        </div>
      </div>
    </Host>
  }

  private checkSlottedSlots() {
    const actionsEl = this.el.querySelector('[slot="actions"]');
    if (actionsEl !== null) {
      this.el.classList.add('banner-with-actions');
    }
    const contentEl = this.el.querySelector('[slot="content"]');
    if (contentEl === null && !this.content) {
      this.el.classList.add('banner-no-content');
    }
  }
}
