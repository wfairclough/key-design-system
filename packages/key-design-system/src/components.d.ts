/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color } from "./types/color";
import { ButtonVariant, Size } from "./components/actions/key-button/key-button";
import { KeyChangeDetail } from "./components/form/key-checkbox/key-checkbox";
import { GridAxis } from "./components/structure/key-grid/grid-axis";
import { CrossAxisAlignment, MainAxisAlignment } from "./components/structure/key-grid/alignments";
import { Fit } from "./components/structure/key-grid/fit";
import { FaWeight } from "./components/graphics/key-icon/key-icon";
import { InputVariant } from "./components/form/key-input/key-input";
import { AutocompleteTypes, TextFieldTypes } from "./interface";
import { ParagraphSize, ParagraphVariant } from "./components/text/key-paragraph/key-paragraph";
import { SpacerDirection, SpacerSize } from "./components/structure/key-spacer/key-spacer";
import { SpinnerSize } from "./components/indicators/key-spinner/key-spinner";
export namespace Components {
    interface KeyAppFrame {
    }
    interface KeyAppPage {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface KeyBanner {
        "color": Color;
        "content": string;
        "expanded": boolean;
        "header": string;
    }
    interface KeyButton {
        "color": Color;
        "disabled": boolean;
        "expand"?: 'full' | 'block';
        "rounded": boolean;
        "size": Size;
        "type": 'submit' | 'reset' | 'button';
        "variant": ButtonVariant;
    }
    interface KeyCard {
        "content": string;
        "header": string;
    }
    interface KeyCardSection {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface KeyCheckbox {
        "autofocus": boolean;
        "checked": boolean;
        "color": Color;
        "disabled": boolean;
        "name": string;
        "readonly": boolean;
        "required": boolean;
    }
    interface KeyFlex {
        "column": boolean;
        "columnReverse": boolean;
        "itemsBaseline": boolean;
        "itemsCenter": boolean;
        "itemsEnd": boolean;
        "itemsStart": boolean;
        "itemsStretch": boolean;
        "justifyCenter": boolean;
        "justifyEnd": boolean;
        "justifySpaceAround": boolean;
        "justifySpaceBetween": boolean;
        "justifySpaceEvenly": boolean;
        "justifyStart": boolean;
        "nowrap": boolean;
        "row": boolean;
        "rowReverse": boolean;
        "wrap": boolean;
        "wrapReverse": boolean;
    }
    interface KeyFontAwesomeKitProvider {
        "faKitToken": string;
        "faKitUrl": string;
        "faVersion": string;
    }
    interface KeyGrid {
        "axis": GridAxis;
        "crossAxisAlignment": CrossAxisAlignment;
        "crossfit": Fit;
        "fit": Fit;
        "mainAxisAlignment": MainAxisAlignment;
        "wrap": boolean;
    }
    interface KeyGridItem {
    }
    interface KeyHeading {
        "level": string;
    }
    interface KeyIcon {
        "color": Color;
        "faIcon": string;
        "faWeight": FaWeight;
    }
    interface KeyInput {
        "accept"?: string;
        "autocapitalize": string;
        "autocomplete": AutocompleteTypes;
        "autocorrect": 'on' | 'off';
        "autofocus": boolean;
        "clearInput": boolean;
        "clearOnEdit"?: boolean;
        "debounce": number;
        "disabled": boolean;
        "enterkeyhint"?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
        "inputmode"?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
        "max"?: string | number;
        "maxlength"?: number;
        "min"?: string | number;
        "minlength"?: number;
        "multiple"?: boolean;
        "name": string;
        "pattern"?: string;
        "placeholder"?: string;
        "readonly": boolean;
        "required": boolean;
        "size"?: number;
        "spellcheck": boolean;
        "step"?: string;
        "type": TextFieldTypes;
        "variant": InputVariant;
    }
    interface KeyLabel {
        "color": Color;
    }
    interface KeyLayout {
    }
    interface KeyPageActions {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface KeyParagraph {
        "size": ParagraphSize;
        "variant": ParagraphVariant;
    }
    interface KeySpacer {
        "direction": SpacerDirection;
        "size": SpacerSize;
    }
    interface KeySpinner {
        "size": SpinnerSize;
    }
    interface KeyVisuallyHidden {
    }
}
declare global {
    interface HTMLKeyAppFrameElement extends Components.KeyAppFrame, HTMLStencilElement {
    }
    var HTMLKeyAppFrameElement: {
        prototype: HTMLKeyAppFrameElement;
        new (): HTMLKeyAppFrameElement;
    };
    interface HTMLKeyAppPageElement extends Components.KeyAppPage, HTMLStencilElement {
    }
    var HTMLKeyAppPageElement: {
        prototype: HTMLKeyAppPageElement;
        new (): HTMLKeyAppPageElement;
    };
    interface HTMLKeyBannerElement extends Components.KeyBanner, HTMLStencilElement {
    }
    var HTMLKeyBannerElement: {
        prototype: HTMLKeyBannerElement;
        new (): HTMLKeyBannerElement;
    };
    interface HTMLKeyButtonElement extends Components.KeyButton, HTMLStencilElement {
    }
    var HTMLKeyButtonElement: {
        prototype: HTMLKeyButtonElement;
        new (): HTMLKeyButtonElement;
    };
    interface HTMLKeyCardElement extends Components.KeyCard, HTMLStencilElement {
    }
    var HTMLKeyCardElement: {
        prototype: HTMLKeyCardElement;
        new (): HTMLKeyCardElement;
    };
    interface HTMLKeyCardSectionElement extends Components.KeyCardSection, HTMLStencilElement {
    }
    var HTMLKeyCardSectionElement: {
        prototype: HTMLKeyCardSectionElement;
        new (): HTMLKeyCardSectionElement;
    };
    interface HTMLKeyCheckboxElement extends Components.KeyCheckbox, HTMLStencilElement {
    }
    var HTMLKeyCheckboxElement: {
        prototype: HTMLKeyCheckboxElement;
        new (): HTMLKeyCheckboxElement;
    };
    interface HTMLKeyFlexElement extends Components.KeyFlex, HTMLStencilElement {
    }
    var HTMLKeyFlexElement: {
        prototype: HTMLKeyFlexElement;
        new (): HTMLKeyFlexElement;
    };
    interface HTMLKeyFontAwesomeKitProviderElement extends Components.KeyFontAwesomeKitProvider, HTMLStencilElement {
    }
    var HTMLKeyFontAwesomeKitProviderElement: {
        prototype: HTMLKeyFontAwesomeKitProviderElement;
        new (): HTMLKeyFontAwesomeKitProviderElement;
    };
    interface HTMLKeyGridElement extends Components.KeyGrid, HTMLStencilElement {
    }
    var HTMLKeyGridElement: {
        prototype: HTMLKeyGridElement;
        new (): HTMLKeyGridElement;
    };
    interface HTMLKeyGridItemElement extends Components.KeyGridItem, HTMLStencilElement {
    }
    var HTMLKeyGridItemElement: {
        prototype: HTMLKeyGridItemElement;
        new (): HTMLKeyGridItemElement;
    };
    interface HTMLKeyHeadingElement extends Components.KeyHeading, HTMLStencilElement {
    }
    var HTMLKeyHeadingElement: {
        prototype: HTMLKeyHeadingElement;
        new (): HTMLKeyHeadingElement;
    };
    interface HTMLKeyIconElement extends Components.KeyIcon, HTMLStencilElement {
    }
    var HTMLKeyIconElement: {
        prototype: HTMLKeyIconElement;
        new (): HTMLKeyIconElement;
    };
    interface HTMLKeyInputElement extends Components.KeyInput, HTMLStencilElement {
    }
    var HTMLKeyInputElement: {
        prototype: HTMLKeyInputElement;
        new (): HTMLKeyInputElement;
    };
    interface HTMLKeyLabelElement extends Components.KeyLabel, HTMLStencilElement {
    }
    var HTMLKeyLabelElement: {
        prototype: HTMLKeyLabelElement;
        new (): HTMLKeyLabelElement;
    };
    interface HTMLKeyLayoutElement extends Components.KeyLayout, HTMLStencilElement {
    }
    var HTMLKeyLayoutElement: {
        prototype: HTMLKeyLayoutElement;
        new (): HTMLKeyLayoutElement;
    };
    interface HTMLKeyPageActionsElement extends Components.KeyPageActions, HTMLStencilElement {
    }
    var HTMLKeyPageActionsElement: {
        prototype: HTMLKeyPageActionsElement;
        new (): HTMLKeyPageActionsElement;
    };
    interface HTMLKeyParagraphElement extends Components.KeyParagraph, HTMLStencilElement {
    }
    var HTMLKeyParagraphElement: {
        prototype: HTMLKeyParagraphElement;
        new (): HTMLKeyParagraphElement;
    };
    interface HTMLKeySpacerElement extends Components.KeySpacer, HTMLStencilElement {
    }
    var HTMLKeySpacerElement: {
        prototype: HTMLKeySpacerElement;
        new (): HTMLKeySpacerElement;
    };
    interface HTMLKeySpinnerElement extends Components.KeySpinner, HTMLStencilElement {
    }
    var HTMLKeySpinnerElement: {
        prototype: HTMLKeySpinnerElement;
        new (): HTMLKeySpinnerElement;
    };
    interface HTMLKeyVisuallyHiddenElement extends Components.KeyVisuallyHidden, HTMLStencilElement {
    }
    var HTMLKeyVisuallyHiddenElement: {
        prototype: HTMLKeyVisuallyHiddenElement;
        new (): HTMLKeyVisuallyHiddenElement;
    };
    interface HTMLElementTagNameMap {
        "key-app-frame": HTMLKeyAppFrameElement;
        "key-app-page": HTMLKeyAppPageElement;
        "key-banner": HTMLKeyBannerElement;
        "key-button": HTMLKeyButtonElement;
        "key-card": HTMLKeyCardElement;
        "key-card-section": HTMLKeyCardSectionElement;
        "key-checkbox": HTMLKeyCheckboxElement;
        "key-flex": HTMLKeyFlexElement;
        "key-font-awesome-kit-provider": HTMLKeyFontAwesomeKitProviderElement;
        "key-grid": HTMLKeyGridElement;
        "key-grid-item": HTMLKeyGridItemElement;
        "key-heading": HTMLKeyHeadingElement;
        "key-icon": HTMLKeyIconElement;
        "key-input": HTMLKeyInputElement;
        "key-label": HTMLKeyLabelElement;
        "key-layout": HTMLKeyLayoutElement;
        "key-page-actions": HTMLKeyPageActionsElement;
        "key-paragraph": HTMLKeyParagraphElement;
        "key-spacer": HTMLKeySpacerElement;
        "key-spinner": HTMLKeySpinnerElement;
        "key-visually-hidden": HTMLKeyVisuallyHiddenElement;
    }
}
declare namespace LocalJSX {
    interface KeyAppFrame {
    }
    interface KeyAppPage {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface KeyBanner {
        "color"?: Color;
        "content"?: string;
        "expanded"?: boolean;
        "header"?: string;
        "onKeyDismiss"?: (event: CustomEvent<void>) => void;
    }
    interface KeyButton {
        "color"?: Color;
        "disabled"?: boolean;
        "expand"?: 'full' | 'block';
        "onKeyBlur"?: (event: CustomEvent<void>) => void;
        "onKeyFocus"?: (event: CustomEvent<void>) => void;
        "rounded"?: boolean;
        "size"?: Size;
        "type"?: 'submit' | 'reset' | 'button';
        "variant"?: ButtonVariant;
    }
    interface KeyCard {
        "content"?: string;
        "header"?: string;
    }
    interface KeyCardSection {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface KeyCheckbox {
        "autofocus"?: boolean;
        "checked"?: boolean;
        "color"?: Color;
        "disabled"?: boolean;
        "name"?: string;
        "onKeyChanged"?: (event: CustomEvent<KeyChangeDetail>) => void;
        "readonly"?: boolean;
        "required"?: boolean;
    }
    interface KeyFlex {
        "column"?: boolean;
        "columnReverse"?: boolean;
        "itemsBaseline"?: boolean;
        "itemsCenter"?: boolean;
        "itemsEnd"?: boolean;
        "itemsStart"?: boolean;
        "itemsStretch"?: boolean;
        "justifyCenter"?: boolean;
        "justifyEnd"?: boolean;
        "justifySpaceAround"?: boolean;
        "justifySpaceBetween"?: boolean;
        "justifySpaceEvenly"?: boolean;
        "justifyStart"?: boolean;
        "nowrap"?: boolean;
        "row"?: boolean;
        "rowReverse"?: boolean;
        "wrap"?: boolean;
        "wrapReverse"?: boolean;
    }
    interface KeyFontAwesomeKitProvider {
        "faKitToken"?: string;
        "faKitUrl"?: string;
        "faVersion"?: string;
    }
    interface KeyGrid {
        "axis"?: GridAxis;
        "crossAxisAlignment"?: CrossAxisAlignment;
        "crossfit"?: Fit;
        "fit"?: Fit;
        "mainAxisAlignment"?: MainAxisAlignment;
        "wrap"?: boolean;
    }
    interface KeyGridItem {
    }
    interface KeyHeading {
        "level"?: string;
    }
    interface KeyIcon {
        "color"?: Color;
        "faIcon"?: string;
        "faWeight"?: FaWeight;
    }
    interface KeyInput {
        "accept"?: string;
        "autocapitalize"?: string;
        "autocomplete"?: AutocompleteTypes;
        "autocorrect"?: 'on' | 'off';
        "autofocus"?: boolean;
        "clearInput"?: boolean;
        "clearOnEdit"?: boolean;
        "debounce"?: number;
        "disabled"?: boolean;
        "enterkeyhint"?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
        "inputmode"?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
        "max"?: string | number;
        "maxlength"?: number;
        "min"?: string | number;
        "minlength"?: number;
        "multiple"?: boolean;
        "name"?: string;
        "pattern"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "size"?: number;
        "spellcheck"?: boolean;
        "step"?: string;
        "type"?: TextFieldTypes;
        "variant"?: InputVariant;
    }
    interface KeyLabel {
        "color"?: Color;
    }
    interface KeyLayout {
    }
    interface KeyPageActions {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface KeyParagraph {
        "size"?: ParagraphSize;
        "variant"?: ParagraphVariant;
    }
    interface KeySpacer {
        "direction"?: SpacerDirection;
        "size"?: SpacerSize;
    }
    interface KeySpinner {
        "size"?: SpinnerSize;
    }
    interface KeyVisuallyHidden {
    }
    interface IntrinsicElements {
        "key-app-frame": KeyAppFrame;
        "key-app-page": KeyAppPage;
        "key-banner": KeyBanner;
        "key-button": KeyButton;
        "key-card": KeyCard;
        "key-card-section": KeyCardSection;
        "key-checkbox": KeyCheckbox;
        "key-flex": KeyFlex;
        "key-font-awesome-kit-provider": KeyFontAwesomeKitProvider;
        "key-grid": KeyGrid;
        "key-grid-item": KeyGridItem;
        "key-heading": KeyHeading;
        "key-icon": KeyIcon;
        "key-input": KeyInput;
        "key-label": KeyLabel;
        "key-layout": KeyLayout;
        "key-page-actions": KeyPageActions;
        "key-paragraph": KeyParagraph;
        "key-spacer": KeySpacer;
        "key-spinner": KeySpinner;
        "key-visually-hidden": KeyVisuallyHidden;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "key-app-frame": LocalJSX.KeyAppFrame & JSXBase.HTMLAttributes<HTMLKeyAppFrameElement>;
            "key-app-page": LocalJSX.KeyAppPage & JSXBase.HTMLAttributes<HTMLKeyAppPageElement>;
            "key-banner": LocalJSX.KeyBanner & JSXBase.HTMLAttributes<HTMLKeyBannerElement>;
            "key-button": LocalJSX.KeyButton & JSXBase.HTMLAttributes<HTMLKeyButtonElement>;
            "key-card": LocalJSX.KeyCard & JSXBase.HTMLAttributes<HTMLKeyCardElement>;
            "key-card-section": LocalJSX.KeyCardSection & JSXBase.HTMLAttributes<HTMLKeyCardSectionElement>;
            "key-checkbox": LocalJSX.KeyCheckbox & JSXBase.HTMLAttributes<HTMLKeyCheckboxElement>;
            "key-flex": LocalJSX.KeyFlex & JSXBase.HTMLAttributes<HTMLKeyFlexElement>;
            "key-font-awesome-kit-provider": LocalJSX.KeyFontAwesomeKitProvider & JSXBase.HTMLAttributes<HTMLKeyFontAwesomeKitProviderElement>;
            "key-grid": LocalJSX.KeyGrid & JSXBase.HTMLAttributes<HTMLKeyGridElement>;
            "key-grid-item": LocalJSX.KeyGridItem & JSXBase.HTMLAttributes<HTMLKeyGridItemElement>;
            "key-heading": LocalJSX.KeyHeading & JSXBase.HTMLAttributes<HTMLKeyHeadingElement>;
            "key-icon": LocalJSX.KeyIcon & JSXBase.HTMLAttributes<HTMLKeyIconElement>;
            "key-input": LocalJSX.KeyInput & JSXBase.HTMLAttributes<HTMLKeyInputElement>;
            "key-label": LocalJSX.KeyLabel & JSXBase.HTMLAttributes<HTMLKeyLabelElement>;
            "key-layout": LocalJSX.KeyLayout & JSXBase.HTMLAttributes<HTMLKeyLayoutElement>;
            "key-page-actions": LocalJSX.KeyPageActions & JSXBase.HTMLAttributes<HTMLKeyPageActionsElement>;
            "key-paragraph": LocalJSX.KeyParagraph & JSXBase.HTMLAttributes<HTMLKeyParagraphElement>;
            "key-spacer": LocalJSX.KeySpacer & JSXBase.HTMLAttributes<HTMLKeySpacerElement>;
            "key-spinner": LocalJSX.KeySpinner & JSXBase.HTMLAttributes<HTMLKeySpinnerElement>;
            "key-visually-hidden": LocalJSX.KeyVisuallyHidden & JSXBase.HTMLAttributes<HTMLKeyVisuallyHiddenElement>;
        }
    }
}
