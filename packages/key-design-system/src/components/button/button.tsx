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
import { ButtonSize } from './button-size';
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

  @Prop({ reflect: true }) variation: ButtonVariation = ButtonVariation.Plain;

  @Prop() expanded: boolean = false;

  @Prop() rounded: boolean = false;

  @Prop({ reflect: true }) disabled = false;

  @Prop() download: string | undefined;

  @Prop() rel: string | undefined;

  @Prop() autofocus: boolean | undefined;

  @Prop({ reflect: true }) size?: ButtonSize = ButtonSize.Medium;

  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  @Event() keyFocus!: EventEmitter<FocusEvent>;

  @Event() keyBlur!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    this.inButtonGroup = !!this.el.closest('key-button-group');
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  render() {
    const {
      expanded,
      inButtonGroup,
    } = this;
    console.log({
      expanded,
      inButtonGroup,
    });

    return (
      <Host
        onClick={this.handleClick.bind(this)}
        class={{
          'key-button': true,
        }}
        >
        <button
          type="button"
          class={this.calcClass()}
          part="native"
          disabled={this.disabled}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          {...this.inheritedAttributes}
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

  private onFocus(event: FocusEvent) {
    console.log(`onFocus`, event);
    this.keyFocus.emit(event);
  };

  private onBlur(event: FocusEvent) {
    console.log(`onBlue`, event);
    this.keyBlur.emit(event);
  };


  private calcClass() {
    const variationColors = {
      [ButtonVariation.Destructive]: {
        'border-transparent': true,
        'text-white': true,
        'bg-red-600': true,
        'hover:bg-red-700': true,
        'focus:ring-red-500': true,
      },
      [ButtonVariation.Plain]: {
        'border-transparent': true,
        'text-slate-700': true,
        'border-slate-400': true,
        'bg-white': true,
        'hover:bg-slate-100': true,
        'focus:ring-slate-500': true,
      },
      [ButtonVariation.Primary]: {
        'border-transparent': true,
        'text-white': true,
        'bg-primary-600': true,
        'hover:bg-primary-700': true,
        'focus:ring-primary-500': true,
      },
      [ButtonVariation.Secondary]: {
        'border-transparent': true,
        'text-white': true,
        'bg-secondary-600': true,
        'hover:bg-secondary-700': true,
        'focus:ring-secondary-500': true,
      },
      [ButtonVariation.Tertiary]: {
        'border-transparent': true,
        'text-white': true,
        'bg-tertiary-600': true,
        'hover:bg-tertiary-700': true,
        'focus:ring-tertiary-500': true,
      },
    };

    const variationSizes = {
      [ButtonSize.Small]: {
        'text-xs': true,
        'rounded': !this.rounded,
        'px-2.5': true,
        'py-1.5': true,
      },
      [ButtonSize.Medium]: {
        'text-base': true,
        'rounded-md': !this.rounded,
        'px-4': true,
        'py-2': true,
      },
      [ButtonSize.Large]: {
        'text-lg': true,
        'rounded-lg': !this.rounded,
        'px-6': true,
        'py-3': true,
      },
    };

    return {
      'rounded-full': this.rounded,
      'inline-flex': true,
      'items-center': true,
      'border': true,
      'font-medium': true,
      'shadow-sm': true,
      'focus:outline-none': true,
      'focus:ring-2': true,
      'focus:ring-offset-2': true,
      ...variationColors[this.variation],
      ...variationSizes[this.size],
    };
  }
}
