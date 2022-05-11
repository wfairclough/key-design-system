import { Component, Element, h, Host } from '@stencil/core';
import { getAttributes } from 'packages/key-design-system/src/utils/helpers';
import { Logger } from 'packages/key-design-system/src/utils/logger';
import { MainAxisAlignment } from '../key-grid/alignments';
import { GridAxis } from '../key-grid/grid-axis';

const log = Logger.create('KeyGridItem');

@Component({
  tag: 'key-grid-item',
  styleUrl: 'key-grid-item.scss',
  shadow: true,
})
export class KeyGridItem {
  
  @Element() el!: HTMLElement;

  private keyGrid?: HTMLElement;
  private keyGridAttributes: Record<string, string> = {};

  get axis(): GridAxis {
    return this.keyGridAttributes['axis'] as GridAxis;
  }

  get axisAlignment(): MainAxisAlignment {
    return this.keyGridAttributes['main-axis-alignment'] as MainAxisAlignment;
  }

  componentWillRender(): void | Promise<void> {
    this.keyGrid = this.el.closest('key-grid');
    if (!this.keyGrid) {
      return;
    }
    this.keyGridAttributes = getAttributes(this.keyGrid);
    log.debug('componentWillLoad', this.keyGrid, {
      attrs: this.keyGrid.getAttributeNames(),
      ...this.keyGridAttributes,
    });
  }

  render() {
    return <Host class={{
      'key-grid-item': true,
      'key-axis-h': this.axis === 'horizontal',
      'key-axis-v': this.axis === 'vertical',
      [`key-alignment-${this.axisAlignment}`]: true,
    }}>
      <slot></slot>
    </Host>
  }
}
