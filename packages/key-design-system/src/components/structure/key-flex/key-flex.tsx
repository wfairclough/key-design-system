import { Component, h, Host, Prop } from '@stencil/core';
import { PropClassTuples } from 'packages/key-design-system/src/utils/helpers';

const justifyClasses: PropClassTuples = [
  ['justifyStart', 'key-justify-start'],
  ['justifyEnd', 'key-justify-end'],
  ['justifyCenter', 'key-justify-center'],
  ['justifySpaceAround', 'key-justify-space-around'],
  ['justifySpaceBetween', 'key-justify-space-between'],
  ['justifySpaceEvenly', 'key-justify-space-evenly'],
];

const alignItemsClasses: PropClassTuples = [
  ['itemsStart', 'key-items-start'],
  ['itemsEnd', 'key-items-end'],
  ['itemsCenter', 'key-items-center'],
  ['itemsStretch', 'key-items-stretch'],
  ['itemsBaseline', 'key-items-baseline'],
];

const wrapClasses: PropClassTuples = [
  ['nowrap', 'key-flex-nowrap'],
  ['wrap', 'key-flex-wrap'],
  ['wrapReverse', 'key-flex-wrap-reverse'],
];

const directionClasses: PropClassTuples = [
  ['row', 'key-flex-row'],
  ['rowReverse', 'key-flex-row-reverse'],
  ['column', 'key-flex-column'],
  ['columnReverse', 'key-flex-column-reverse'],
];

@Component({
  tag: 'key-flex',
  styleUrl: 'key-flex.scss',
  shadow: true,
})
export class KeyFlex {
  @Prop({ reflect: true }) justifyStart: boolean = false;
  @Prop({ reflect: true }) justifyEnd: boolean = false;
  @Prop({ reflect: true }) justifyCenter: boolean = false;
  @Prop({ reflect: true }) justifySpaceAround: boolean = false;
  @Prop({ reflect: true }) justifySpaceBetween: boolean = false;
  @Prop({ reflect: true }) justifySpaceEvenly: boolean = false;

  @Prop({ reflect: true }) itemsStart: boolean = false;
  @Prop({ reflect: true }) itemsEnd: boolean = false;
  @Prop({ reflect: true }) itemsCenter: boolean = false;
  @Prop({ reflect: true }) itemsStretch: boolean = false;
  @Prop({ reflect: true }) itemsBaseline: boolean = false;

  @Prop({ reflect: true }) nowrap: boolean = false;
  @Prop({ reflect: true }) wrap: boolean = false;
  @Prop({ reflect: true }) wrapReverse: boolean = false;

  @Prop({ reflect: true }) row: boolean = false;
  @Prop({ reflect: true }) rowReverse: boolean = false;
  @Prop({ reflect: true }) column: boolean = false;
  @Prop({ reflect: true }) columnReverse: boolean = false;

  render() {
    const directionClass = this.directionClass();
    const justifyClass = this.justifyClass();
    const alignItemsClass = this.alignItemsClass();
    const wrapClass = this.wrapClass();
    return <Host>
      <div part="flexbox" class={{
        'key-flex': true,
        [directionClass]: !!directionClass,
        [justifyClass]: !!justifyClass,
        [alignItemsClass]: !!justifyClass,
        [wrapClass]: !!wrapClass,
      }}>
        <slot></slot>
      </div>
    </Host>;
  }

  private justifyClass(): string {
    return PropClassTuples.classForPropMatching(this, justifyClasses, true) ?? justifyClasses[0][1];
  }

  private alignItemsClass(): string {
    return PropClassTuples.classForPropMatching(this, alignItemsClasses, true) ?? alignItemsClasses[0][1];
  }

  private wrapClass(): string {
    return PropClassTuples.classForPropMatching(this, wrapClasses, true) ?? wrapClasses[0][1];
  }

  private directionClass(): string {
    return PropClassTuples.classForPropMatching(this, directionClasses, true) ?? directionClasses[0][1];
  }

}
