import { Component, Element, h, Host, Prop } from '@stencil/core';
import { Logger } from '../../../utils/logger';
import { v4 as uuid } from 'uuid'

export type FaWeight = 'fa-solid' | 'fa-regular' | 'fa-light' | 'fa-thin' | 'fa-duotone' | 'fa-brands';

const log = Logger.create('KeyIcon');

@Component({
  tag: 'key-icon',
  styleUrl: 'key-icon.scss',
  shadow: false,
})
export class KeyIcon {
  id = uuid();
  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) faWeight: FaWeight;
  @Prop({ reflect: true }) faIcon: string;

  render() {
    log.debug(`render`, this.faIcon, this.faWeight);
    const isFa = !!this.faIcon
    const faWeight = this.faWeight ?? 'fa-light';
    return <Host id={this.id} class={{ 'key-icon-custom': !isFa, 'key-fa': isFa }}>
      <span key={this.id} class="key-icon-wrapper">
        <slot>
          { isFa && <i class={`${faWeight} ${this.faIcon} fa-fw`}></i> }
        </slot>
      </span>
    </Host>;
  }
}
