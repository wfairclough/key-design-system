import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { hasShadowDom, inheritAttributes } from '../../utils/helpers';
import { ButtonVariation } from './button-variation';

@Component({
  tag: 'key-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button implements ComponentInterface {
  private inButtonGroup = false;
  private inheritedAttributes: { [k: string]: any } = {};

  @Element() el!: HTMLElement;

  @Prop() variation: ButtonVariation = ButtonVariation.Plain;

  @Prop() expanded: boolean = false;

  @Prop({ reflect: true }) disabled = false;

  @Prop() download: string | undefined;

  @Prop() rel: string | undefined;

  @Prop() autofocus: boolean | undefined;

  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large' = 'default';

  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  @Event() keyFocus!: EventEmitter<void>;

  @Event() keyBlur!: EventEmitter<void>;

  componentWillLoad() {
    this.inButtonGroup = !!this.el.closest('key-button-group');
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  render() {
    const {
      disabled,
      expanded,
      inheritedAttributes,
      onBlur,
      onFocus,
      variation,
    } = this;
    return (
      <Host
        onClick={this.handleClick}
        class={{
          'key-button': true,
          [`key-button-${variation}`]: true,
          'key-expanded': expanded,
        }}
      >
        <button
          class="button-native"
          part="native"
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          {...inheritedAttributes}
        >
          <slot name="leading" />
          <span class="content">
            <slot />
          </span>
          <slot name="trailing" />
        </button>
      </Host>
    );
  }

  private handleClick(ev: Event) {
    if (hasShadowDom(this.el) && this.type === 'submit') {
      // this button wants to specifically submit a form
      // climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();

        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }

  private onFocus = () => {
    this.keyFocus.emit();
  };

  private onBlur = () => {
    this.keyBlur.emit();
  };
}
