import { Component, ComponentWillLoad, Element, h, Host, Prop } from '@stencil/core';
import { v4 as uuid } from 'uuid'

import { Color } from '../../../types/color';
import { Logger } from '../../../utils/logger';
import { createElementFromHTML } from '../../../utils/helpers';

export type FaWeight = 'fa-solid' | 'fa-regular' | 'fa-light' | 'fa-thin' | 'fa-duotone' | 'fa-brands';

const log = Logger.create('KeyIcon');

@Component({
  tag: 'key-icon',
  styleUrl: 'key-icon.scss',
  shadow: true,
})
export class KeyIcon implements ComponentWillLoad {
  id = uuid();
  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) faWeight: FaWeight;
  @Prop({ reflect: true }) faIcon: string;
  @Prop({ reflect: true }) color: Color;

  private iconHolderRef: HTMLSpanElement;
  private loadedSvg: string;

  async componentWillLoad(): Promise<void> {
    const icon = this.faIcon?.replace('fa-', '');
    if (!icon) {
      return;
    }
    const weight = this.faWeight?.replace('fa-', '') || 'light';
    const qs = new URLSearchParams({ token: 'a30ba47e78' });
    try {
      const resp = await fetch(`https://ka-p.fontawesome.com/releases/v6.1.1/svgs/${weight}/${icon}.svg?${qs}`);
      const svg = await resp.text();
      this.loadedSvg = svg;
      log.debug(`fa resp`, );
    } catch (err) {
      log.error(err);
    }
  }

  componentDidLoad() {
    if (this.loadedSvg) {
      const iconSvgNode = createElementFromHTML(this.loadedSvg);
      this.iconHolderRef.appendChild(iconSvgNode);
    }
  }

  render() {
    log.debug(`render`, this.faIcon, this.faWeight);
    const isFa = !!this.faIcon
    // const faWeight = this.faWeight ?? 'fa-light';
    return <Host id={this.id} class={{
      'key-icon': true,
      'key-icon-custom': !isFa,
      'key-fa': isFa,
      [Color.classForColor(this.color)]: !!this.color,
    }}>
      <span key={this.id} class="key-icon-wrapper" ref={el => this.iconHolderRef = el}>
          {/* { isFa && <i id='key-icon-placeholder' class={`${faWeight} ${this.faIcon} fa-fw`}></i> } */}
        <slot slot="custom"></slot>
      </span>
    </Host>;
  }
}
