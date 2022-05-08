/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonVariation } from "./components/button/button-variation";
import { ButtonSize } from "./components/button/button-size";
export namespace Components {
    interface KeyBackdrop {
    }
    interface KeyButton {
        "autofocus": boolean | undefined;
        "disabled": boolean;
        "download": string | undefined;
        "expanded": boolean;
        "rel": string | undefined;
        "rounded": boolean;
        "size"?: ButtonSize;
        "type": 'submit' | 'reset' | 'button';
        "variation": ButtonVariation;
    }
    interface KeyComandPalette {
        "showing": boolean;
        "triggerChord": string;
    }
    interface KeyDivider {
        "margin": KeyDividerMargin;
    }
    interface KeyLink {
        "url": string;
    }
    interface KeyList {
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
        /**
          * The first name
         */
        "variation": KeyListVariation;
    }
    interface KeyListItem {
        "labelSize": number;
    }
    interface KeyNavbar {
        "color": string;
    }
}
declare global {
    interface HTMLKeyBackdropElement extends Components.KeyBackdrop, HTMLStencilElement {
    }
    var HTMLKeyBackdropElement: {
        prototype: HTMLKeyBackdropElement;
        new (): HTMLKeyBackdropElement;
    };
    interface HTMLKeyButtonElement extends Components.KeyButton, HTMLStencilElement {
    }
    var HTMLKeyButtonElement: {
        prototype: HTMLKeyButtonElement;
        new (): HTMLKeyButtonElement;
    };
    interface HTMLKeyComandPaletteElement extends Components.KeyComandPalette, HTMLStencilElement {
    }
    var HTMLKeyComandPaletteElement: {
        prototype: HTMLKeyComandPaletteElement;
        new (): HTMLKeyComandPaletteElement;
    };
    interface HTMLKeyDividerElement extends Components.KeyDivider, HTMLStencilElement {
    }
    var HTMLKeyDividerElement: {
        prototype: HTMLKeyDividerElement;
        new (): HTMLKeyDividerElement;
    };
    interface HTMLKeyLinkElement extends Components.KeyLink, HTMLStencilElement {
    }
    var HTMLKeyLinkElement: {
        prototype: HTMLKeyLinkElement;
        new (): HTMLKeyLinkElement;
    };
    interface HTMLKeyListElement extends Components.KeyList, HTMLStencilElement {
    }
    var HTMLKeyListElement: {
        prototype: HTMLKeyListElement;
        new (): HTMLKeyListElement;
    };
    interface HTMLKeyListItemElement extends Components.KeyListItem, HTMLStencilElement {
    }
    var HTMLKeyListItemElement: {
        prototype: HTMLKeyListItemElement;
        new (): HTMLKeyListItemElement;
    };
    interface HTMLKeyNavbarElement extends Components.KeyNavbar, HTMLStencilElement {
    }
    var HTMLKeyNavbarElement: {
        prototype: HTMLKeyNavbarElement;
        new (): HTMLKeyNavbarElement;
    };
    interface HTMLElementTagNameMap {
        "key-backdrop": HTMLKeyBackdropElement;
        "key-button": HTMLKeyButtonElement;
        "key-comand-palette": HTMLKeyComandPaletteElement;
        "key-divider": HTMLKeyDividerElement;
        "key-link": HTMLKeyLinkElement;
        "key-list": HTMLKeyListElement;
        "key-list-item": HTMLKeyListItemElement;
        "key-navbar": HTMLKeyNavbarElement;
    }
}
declare namespace LocalJSX {
    interface KeyBackdrop {
    }
    interface KeyButton {
        "autofocus"?: boolean | undefined;
        "disabled"?: boolean;
        "download"?: string | undefined;
        "expanded"?: boolean;
        "onKeyBlur"?: (event: CustomEvent<FocusEvent>) => void;
        "onKeyFocus"?: (event: CustomEvent<FocusEvent>) => void;
        "rel"?: string | undefined;
        "rounded"?: boolean;
        "size"?: ButtonSize;
        "type"?: 'submit' | 'reset' | 'button';
        "variation"?: ButtonVariation;
    }
    interface KeyComandPalette {
        "showing"?: boolean;
        "triggerChord"?: string;
    }
    interface KeyDivider {
        "margin"?: KeyDividerMargin;
    }
    interface KeyLink {
        "url"?: string;
    }
    interface KeyList {
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
        /**
          * The first name
         */
        "variation"?: KeyListVariation;
    }
    interface KeyListItem {
        "labelSize"?: number;
    }
    interface KeyNavbar {
        "color"?: string;
    }
    interface IntrinsicElements {
        "key-backdrop": KeyBackdrop;
        "key-button": KeyButton;
        "key-comand-palette": KeyComandPalette;
        "key-divider": KeyDivider;
        "key-link": KeyLink;
        "key-list": KeyList;
        "key-list-item": KeyListItem;
        "key-navbar": KeyNavbar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "key-backdrop": LocalJSX.KeyBackdrop & JSXBase.HTMLAttributes<HTMLKeyBackdropElement>;
            "key-button": LocalJSX.KeyButton & JSXBase.HTMLAttributes<HTMLKeyButtonElement>;
            "key-comand-palette": LocalJSX.KeyComandPalette & JSXBase.HTMLAttributes<HTMLKeyComandPaletteElement>;
            "key-divider": LocalJSX.KeyDivider & JSXBase.HTMLAttributes<HTMLKeyDividerElement>;
            "key-link": LocalJSX.KeyLink & JSXBase.HTMLAttributes<HTMLKeyLinkElement>;
            "key-list": LocalJSX.KeyList & JSXBase.HTMLAttributes<HTMLKeyListElement>;
            "key-list-item": LocalJSX.KeyListItem & JSXBase.HTMLAttributes<HTMLKeyListItemElement>;
            "key-navbar": LocalJSX.KeyNavbar & JSXBase.HTMLAttributes<HTMLKeyNavbarElement>;
        }
    }
}
