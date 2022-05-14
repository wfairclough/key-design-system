import { Component, ComponentWillLoad, Element, h, Host, Prop } from '@stencil/core';
import { v4 as uuid } from 'uuid'

import { Color } from '../../../types/color';
import { Logger } from '../../../utils/logger';
import { createElementFromHTML, simpleHash } from '../../../utils/helpers';
import faStore, { getSvgIconFromCache, cacheSvgIcon } from '../key-font-awesome-kit/key-fa-store';

export type FaWeight = 'fa-solid' | 'fa-regular' | 'fa-light' | 'fa-thin' | 'fa-duotone' | 'fa-brands';

const log = Logger.create('KeyIcon');

@Component({
  tag: 'key-icon',
  styleUrl: 'key-icon.scss',
  shadow: true,
})
export class KeyIcon implements ComponentWillLoad {
  id = uuid();
  private key: string = this.id;
  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) faWeight: FaWeight;
  @Prop({ reflect: true }) faIcon: string;
  @Prop({ reflect: true }) color: Color;

  private iconHolderRef: HTMLSpanElement;
  #loadedSvg: string;
  private set loadedSvg(svg: string) {
    this.key = simpleHash(svg);
    this.#loadedSvg = svg;
  }

  async componentWillLoad(): Promise<void> {
    log.debug(`componentWillLoad`);
    const icon = this.faIcon?.replace('fa-', '');
    if (!icon || !faStore.config?.token) {
      return;
    }
    const weight = this.faWeight?.replace('fa-', '') || 'light';

    const cachedSvg = getSvgIconFromCache(weight, icon);
    if (cachedSvg) {
      this.loadedSvg = cachedSvg;
      return;
    }
  }

  async componentDidLoad() {
    log.debug(`componentDidLoad`);
    if (this.#loadedSvg) {
      this.appendSvg();
      return;
    }
    const icon = this.faIcon?.replace('fa-', '');
    const weight = this.faWeight?.replace('fa-', '') || 'light';

    const qs = new URLSearchParams({ token: faStore.config?.token });
    try {
      const resp = await fetch(`https://ka-p.fontawesome.com/releases/${faStore.config.version}/svgs/${weight}/${icon}.svg?${qs}`);
      const svg = await resp.text();
      this.loadedSvg = svg;
      cacheSvgIcon(weight, icon, svg);
      this.appendSvg();
    } catch (err) {
      log.error(err);
    }
  }

  private appendSvg() {
    if (this.#loadedSvg) {
      const iconSvgNode = createElementFromHTML(this.#loadedSvg);
      this.iconHolderRef.appendChild(iconSvgNode);
    }
  }

  render() {
    log.debug(`render`, this.key);
    const isFa = !!this.faIcon
    // const faWeight = this.faWeight ?? 'fa-light';
    return <Host id={this.id} class={{
      'key-icon': true,
      'key-icon-custom': !isFa,
      'key-fa': isFa,
      [Color.classForColor(this.color)]: !!this.color,
    }}>
      <span class="key-icon-wrapper" ref={el => this.iconHolderRef = el} key={this.key}>
        <slot slot="custom"></slot>
      </span>
    </Host>;
  }
}
