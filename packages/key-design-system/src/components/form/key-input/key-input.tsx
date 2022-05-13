import { Component, Element, h, Host, Prop } from '@stencil/core';
import { AutocompleteTypes, TextFieldTypes } from '../../../interface';

import { Attributes, inheritAriaAttributes, inheritAttributes } from '../../../utils/helpers';
import { Logger } from '../../../utils/logger';

const log = Logger.create('KeyInput');

export type InputVariant = 'default' | 'search' | 'email' | 'password' | 'tel'

@Component({
  tag: 'key-input',
  styleUrl: 'key-input.scss',
  shadow: true,
})
export class KeyInput {

  @Element() el!: HTMLElement;
  private inputId = `ion-input-${inputIds++}`;

  @Prop({ reflect: true }) variant: InputVariant = 'default';
  
  @Prop() accept?: string;
  @Prop() autocapitalize = 'off';
  @Prop() autocomplete: AutocompleteTypes = 'off';
  @Prop() autocorrect: 'on' | 'off' = 'off';
  @Prop() autofocus = false;
  @Prop() clearInput = false;
  @Prop() clearOnEdit?: boolean;
  @Prop() debounce = 0;
  @Prop() disabled = false;
  @Prop() enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  @Prop() inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  @Prop() max?: string | number;
  @Prop() maxlength?: number;
  @Prop() min?: string | number;
  @Prop() minlength?: number;
  @Prop() multiple?: boolean;
  @Prop() name: string = this.inputId;
  @Prop() pattern?: string;
  @Prop() placeholder?: string;
  @Prop() readonly = false;
  @Prop() required = false;
  @Prop() spellcheck = false;
  @Prop() step?: string;
  @Prop() size?: number;
  @Prop() type: TextFieldTypes = 'text';

  private inheritedAttributes: Attributes;

  componentWillLoad() {
    this.inheritedAttributes = {
      ...inheritAriaAttributes(this.el),
      ...inheritAttributes(this.el, ['tabindex', 'title']),
    };
    log.debug(`componentWillLoad`, this, this.el);
  }

  render() {
    return <Host class={{
      [`${this.variant}`]: !!this.variant,
    }}>
      <div class="key-input-container">
        <input 
          type={this.type}
          name={this.name}
          placeholder={this.placeholder}
          {...this.inheritedAttributes}>
        </input>
      </div>
    </Host>;
  }
}

let inputIds = 0;
