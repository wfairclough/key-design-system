import { Build, Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from '@stencil/core';
import { AutocompleteTypes, TextFieldTypes } from '../../../interface';

import { Attributes, debounceEvent, inheritAriaAttributes, inheritAttributes } from '../../../utils/helpers';
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
  private nativeInput!: HTMLInputElement;
  private inputId = `key-input-${inputIds++}`;
  private didBlurAfterEdit = false;
  private isComposing = false;
  private inheritedAttributes: Attributes;

  @Prop({ reflect: true }) variant: InputVariant = 'default';
  
  @Prop() accept?: string;
  @Prop() autocapitalize = 'off';
  @Prop() autocomplete: AutocompleteTypes = 'off';
  @Prop() autocorrect: 'on' | 'off' = 'off';
  @Prop() autofocus = false;
  @Prop() clearInput = false;
  @Prop() clearOnEdit?: boolean;
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
  @Prop({ mutable: true }) value?: string | number | null = '';
  
  @Prop() debounce = 0;
  
  @Watch('debounce')
  protected debounceChanged() {
    this.keyValueChange = debounceEvent(this.keyChange, this.debounce);
  }

  @Watch('value')
  protected valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value && !this.isComposing) {
      /**
       * Assigning the native input's value on attribute
       * value change, allows `keyInput` implementations
       * to override the control's value.
       *
       * Used for patterns such as input trimming (removing whitespace),
       * or input masking.
       */
      nativeInput.value = value;
    }
    this.keyValueChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }

  @Event() keyChange: EventEmitter<any>;
  @Event() keyValueChange: EventEmitter<any>;
  @Event() keyBlur: EventEmitter<any>;
  @Event() keyFocus: EventEmitter<any>;

   @Method()
   async setFocus() {
     if (this.nativeInput) {
       this.nativeInput.focus();
     }
   }
 
   @Method()
   async setBlur() {
     if (this.nativeInput) {
       this.nativeInput.blur();
     }
   }
 
   @Method()
   getInputElement(): Promise<HTMLInputElement> {
     return Promise.resolve(this.nativeInput!);
   }

  componentWillLoad() {
    this.inheritedAttributes = {
      ...inheritAriaAttributes(this.el),
      ...inheritAttributes(this.el, ['tabindex', 'title']),
    };
    log.debug(`componentWillLoad`, this, this.el);
  }

  connectedCallback() {
    this.debounceChanged();
  }

  componentDidLoad() {
    const nativeInput = this.nativeInput;
    if (nativeInput) {
      // TODO: FW-729 Update to JSX bindings when Stencil resolves bug with:
      // https://github.com/ionic-team/stencil/issues/3235
      nativeInput.addEventListener('compositionstart', this.onCompositionStart);
      nativeInput.addEventListener('compositionend', this.onCompositionEnd);
    }
  }

  disconnectedCallback() {
    if (Build.isBrowser) {
      document.dispatchEvent(
        new CustomEvent('ionInputDidUnload', {
          detail: this.el,
        })
      );
    }
    const nativeInput = this.nativeInput;
    if (nativeInput) {
      nativeInput.removeEventListener('compositionstart', this.onCompositionStart);
      nativeInput.removeEventListener('compositionEnd', this.onCompositionEnd);
    }
  }
  

  render() {
    return <Host class={{
      'key-input': true,
      [`${this.variant}`]: !!this.variant,
    }}>
      <div class="key-input-container">
        <div class="key-input-pos-relative">
          <input 
            ref={ref => this.nativeInput = ref}
            class="key-native-input"
            part="native-input"
            onChange={this.onKeyChange}
            onBlur={this.onKeyBlur}
            onFocus={this.onKeyFocus}
            onKeyDown={this.onKeydown}
            accept={this.accept}
            autocapitalize={this.autocapitalize}
            autocomplete={this.autocomplete}
            autocorrect={this.autocorrect}
            autofocus={this.autofocus}
            disabled={this.disabled}
            enterkeyhint={this.enterkeyhint}
            inputmode={this.inputmode}
            max={this.max}
            maxlength={this.maxlength}
            min={this.min}
            minlength={this.minlength}
            multiple={this.multiple}
            name={this.name}
            pattern={this.pattern}
            placeholder={this.placeholder}
            readonly={this.readonly}
            required={this.required}
            spellcheck={this.spellcheck}
            step={this.step}
            size={this.size}
            type={this.type}
            {...this.inheritedAttributes}>
          </input>
          <div class="key-input-end">
            <slot name="end">
              <key-icon faWeight='fa-light' faIcon='fa-search'></key-icon>
            </slot>
          </div>
        </div>
      </div>
    </Host>;
  }

  private shouldClearOnEdit() {
    const { type, clearOnEdit } = this;
    return clearOnEdit === undefined ? type === 'password' : clearOnEdit;
  }

  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  private onKeyChange = (event) => {
    log.debug(`onKeyChange`, event);
    this.keyChange.emit(event);
  };

  private onKeyBlur = (event) => {
    log.debug(`onKeyBlur`, event);
    this.keyBlur.emit(event);
  };

  private onKeyFocus = (event) => {
    log.debug(`onKeyFocus`, event);
    this.keyFocus.emit(event);
  };

  private onKeydown = (ev: KeyboardEvent) => {
    if (this.shouldClearOnEdit()) {
      // Did the input value change after it was blurred and edited?
      // Do not clear if user is hitting Enter to submit form
      if (this.didBlurAfterEdit && this.hasValue() && ev.key !== 'Enter') {
        // Clear the input
        this.clearTextInput();
      }

      // Reset the flag
      this.didBlurAfterEdit = false;
    }
  };

  private onCompositionStart = () => {
    this.isComposing = true;
  };

  private onCompositionEnd = () => {
    this.isComposing = false;
  };

  private clearTextInput = (ev?: Event) => {
    if (this.clearInput && !this.readonly && !this.disabled && ev) {
      ev.preventDefault();
      ev.stopPropagation();

      // Attempt to focus input again after pressing clear button
      this.setFocus();
    }

    this.value = '';

    /**
     * This is needed for clearOnEdit
     * Otherwise the value will not be cleared
     * if user is inside the input
     */
    if (this.nativeInput) {
      this.nativeInput.value = '';
    }
  };

}

let inputIds = 0;
