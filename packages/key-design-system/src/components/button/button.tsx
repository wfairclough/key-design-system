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
      inButtonGroup,
      onBlur,
      onFocus,
      variation,
    } = this;
    console.log({
      disabled,
      expanded,
      inheritedAttributes,
      inButtonGroup,
      onBlur,
      onFocus,
      variation,
    });

    const variationColors = {
      [ButtonVariation.Destructive]: {
        'text-white': true,
        'bg-red-600': true,
        'hover:bg-red-700': true,
        'focus:ring-red-500': true,
      },
      [ButtonVariation.Plain]: {
        'text-primary-400': true,
        'bg-primary-50': true,
        'hover:bg-primary-100': true,
        'focus:ring-primary-400': true,
      },
      [ButtonVariation.Primary]: {
        'text-white': true,
        'bg-primary-600': true,
        'hover:bg-primary-700': true,
        'focus:ring-primary-500': true,
      },
      [ButtonVariation.Secondary]: {
        'text-white': true,
        'bg-secondary-600': true,
        'hover:bg-secondary-700': true,
        'focus:ring-secondary-500': true,
      },
      [ButtonVariation.Tertiary]: {
        'text-white': true,
        'bg-tertiary-600': true,
        'hover:bg-tertiary-700': true,
        'focus:ring-tertiary-500': true,
      },
    };

    const common = {
      'inline-flex': true,
      'items-center': true,
      'border': true,
      'border-transparent': true,
      'font-medium': true,
      'shadow-sm': true,
      'focus:outline-none': true,
      'focus:ring-2': true,
      'focus:ring-offset-2': true,
      ...variationColors[variation],
    };

    const med = {
      ...common,
      'px-4': true,
      'py-2': true,
      'text-base': true,
      'rounded-md': true,
    };

    const xsm = {
      ...common,
      'px-2.5': true,
      'py-1.5': true,
      'text-xs': true,
      'rounded': true,
    };

    return (

      <Host onClick={this.handleClick}>
        <button type="button" class={med || xsm}>
          <slot name="leading" />
          <span class="content">
            <slot />
          </span>
          <slot name="trailing" />
        </button>
      </Host>
    );
  }

  // render() {
  //   const {
  //     disabled,
  //     expanded,
  //     inheritedAttributes,
  //     inButtonGroup,
  //     onBlur,
  //     onFocus,
  //     variation,
  //   } = this;
  //   return (
  //     <Host
  //       onClick={this.handleClick}
  //       class={{
  //         'key-button': true,
  //         [`key-button-${variation}`]: true,
  //         'key-expanded': expanded,
  //         [`key-in-button-group`]: inButtonGroup,
  //       }}
  //     >
  //       <button
  //         class="button-native"
  //         part="native"
  //         disabled={disabled}
  //         onFocus={onFocus}
  //         onBlur={onBlur}
  //         {...inheritedAttributes}
  //       >
  //         <slot name="leading" />
  //         <span class="content">
  //           <slot />
  //         </span>
  //         <slot name="trailing" />
  //       </button>
  //     </Host>
  //   );
  // }

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
