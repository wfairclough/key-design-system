import { Component, Element, h, Host, Prop } from '@stencil/core';
import { Logger } from 'packages/key-design-system/src/utils/logger';

<i class=" fa-plus"></i>

export type FaWeight = 'fa-solid' | 'fa-regular' | 'fa-light' | 'fa-thin' | 'fa-duotone' | 'fa-brands';

const log = Logger.create('KeyIcon');

@Component({
  tag: 'key-icon',
  styleUrl: 'key-icon.scss',
  shadow: false,
})
export class KeyIcon {
  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) faWeight: FaWeight;
  @Prop({ reflect: true }) faIcon: string;

  render() {
    log.debug(`render`, this.faIcon, this.faWeight);
    const isFa = !!this.faIcon
    const faWeight = this.faWeight ?? 'fa-light';
    return <Host>
      <slot>
        {
          isFa
            ? <span class="key-icon-wrapper" part="icon" key={`${faWeight} ${this.faIcon}`}><i class={`${faWeight} ${this.faIcon}`}></i></span>
            : <div></div>
        }
      </slot>
    </Host>;
  }
}
