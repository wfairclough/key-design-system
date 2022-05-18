import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { Color } from '../../../types/color';
import { v4 as uuid } from 'uuid';

import { Logger } from '../../../utils/logger';
import {
  Attributes,
  inheritAriaAttributes,
  inheritAttributes,
} from '../../../utils/helpers';

const log = Logger.create('KeyCheckbox');

export interface KeyChangeDetail {
  value: boolean;
}

@Component({
  tag: 'key-checkbox',
  styleUrl: 'key-checkbox.scss',
  shadow: true,
})
export class KeyCheckbox {
  id = `KeyCheckbox-${uuid()}`;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) color: Color = 'tertiary';
  @Prop({ reflect: true }) checked: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) autofocus = false;
  @Prop({ reflect: true }) readonly = false;
  @Prop({ reflect: true }) required = false;
  @Prop() name: string = this.id;

  @Event() keyChanged: EventEmitter<KeyChangeDetail>;

  private nativeInput: HTMLInputElement;

  private inheritedAttributes: Attributes;

  componentWillLoad() {
    this.inheritedAttributes = {
      ...inheritAriaAttributes(this.el),
      ...inheritAttributes(this.el, ['tabindex', 'title']),
    };
    log.debug(`componentWillLoad`);
  }

  private onNativeInputChange = (evt: Event) => {
    log.debug(`onNativeInputChange`, evt, this.nativeInput.value);
    this.keyChanged.emit({ value: this.nativeInput.checked });
    this.checked = this.nativeInput.checked;
  };

  render() {
    return (
      <Host
        class={{
          'key-checkbox': true,
          'key-checkbox-checked': this.checked,
          'key-checkbox-disabled': this.disabled,
          ...Color.classesForColor(this.color),
        }}
        style={{
          ...Color.stylesForColor(this.color),
        }}
      >
        <div class="key-checkbox-container">
          <input
            ref={(ref) => (this.nativeInput = ref)}
            class="key-checkbox-input"
            part="native"
            type="checkbox"
            id={this.id}
            onChange={this.onNativeInputChange}
            autofocus={this.autofocus}
            name={this.name}
            readonly={this.readonly}
            required={this.required}
            checked={this.checked}
            disabled={this.disabled}
            {...this.inheritedAttributes}
          ></input>
          <label
            part="native-label"
            data-for={this.id}
            class="key-checkbox-label"
          >
            <span>
              <slot></slot>
            </span>
          </label>
        </div>
      </Host>
    );
  }
}
