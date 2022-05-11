/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonVariant, Color, Size } from "./components/key-button/key-button";
import { GridAxis } from "./components/structure/key-grid/grid-axis";
import { CrossAxisAlignment, MainAxisAlignment } from "./components/structure/key-grid/alignments";
import { Fit } from "./components/structure/key-grid/fit";
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
    interface KeyButton {
        "color": Color;
        "disabled": boolean;
        "expand"?: 'full' | 'block';
        "size": Size;
        "type": 'submit' | 'reset' | 'button';
        "variant": ButtonVariant;
    }
    interface KeyCard {
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
    interface KeyLayout {
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
    interface HTMLElementTagNameMap {
        "key-app-frame": HTMLKeyAppFrameElement;
        "key-app-page": HTMLKeyAppPageElement;
        "key-button": HTMLKeyButtonElement;
        "key-card": HTMLKeyCardElement;
        "key-card-section": HTMLKeyCardSectionElement;
        "key-grid": HTMLKeyGridElement;
        "key-grid-item": HTMLKeyGridItemElement;
        "key-layout": HTMLKeyLayoutElement;
        "key-page-actions": HTMLKeyPageActionsElement;
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
    interface KeyButton {
        "color"?: Color;
        "disabled"?: boolean;
        "expand"?: 'full' | 'block';
        "onKeyBlur"?: (event: CustomEvent<void>) => void;
        "onKeyFocus"?: (event: CustomEvent<void>) => void;
        "size"?: Size;
        "type"?: 'submit' | 'reset' | 'button';
        "variant"?: ButtonVariant;
    }
    interface KeyCard {
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
    interface KeyLayout {
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
    interface IntrinsicElements {
        "key-app-frame": KeyAppFrame;
        "key-app-page": KeyAppPage;
        "key-button": KeyButton;
        "key-card": KeyCard;
        "key-card-section": KeyCardSection;
        "key-grid": KeyGrid;
        "key-grid-item": KeyGridItem;
        "key-layout": KeyLayout;
        "key-page-actions": KeyPageActions;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "key-app-frame": LocalJSX.KeyAppFrame & JSXBase.HTMLAttributes<HTMLKeyAppFrameElement>;
            "key-app-page": LocalJSX.KeyAppPage & JSXBase.HTMLAttributes<HTMLKeyAppPageElement>;
            "key-button": LocalJSX.KeyButton & JSXBase.HTMLAttributes<HTMLKeyButtonElement>;
            "key-card": LocalJSX.KeyCard & JSXBase.HTMLAttributes<HTMLKeyCardElement>;
            "key-card-section": LocalJSX.KeyCardSection & JSXBase.HTMLAttributes<HTMLKeyCardSectionElement>;
            "key-grid": LocalJSX.KeyGrid & JSXBase.HTMLAttributes<HTMLKeyGridElement>;
            "key-grid-item": LocalJSX.KeyGridItem & JSXBase.HTMLAttributes<HTMLKeyGridItemElement>;
            "key-layout": LocalJSX.KeyLayout & JSXBase.HTMLAttributes<HTMLKeyLayoutElement>;
            "key-page-actions": LocalJSX.KeyPageActions & JSXBase.HTMLAttributes<HTMLKeyPageActionsElement>;
        }
    }
}
