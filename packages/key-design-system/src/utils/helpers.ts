import { EventEmitter } from "@stencil/core";

export type Attributes = { [key: string]: any };

/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `key-input` should inherit
 * the `title` attribute that developers set directly on `key-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export const inheritAttributes = (
  el: HTMLElement,
  attributes: string[] = []
) => {
  const attributeObject: { [k: string]: any } = {};

  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
};

/**
 * List of available ARIA attributes + `role`.
 * Removed deprecated attributes.
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 */
 const ariaAttributes = [
  'role',
  'aria-activedescendant',
  'aria-atomic',
  'aria-autocomplete',
  'aria-braillelabel',
  'aria-brailleroledescription',
  'aria-busy',
  'aria-checked',
  'aria-colcount',
  'aria-colindex',
  'aria-colindextext',
  'aria-colspan',
  'aria-controls',
  'aria-current',
  'aria-describedby',
  'aria-description',
  'aria-details',
  'aria-disabled',
  'aria-errormessage',
  'aria-expanded',
  'aria-flowto',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-keyshortcuts',
  'aria-label',
  'aria-labelledby',
  'aria-level',
  'aria-live',
  'aria-multiline',
  'aria-multiselectable',
  'aria-orientation',
  'aria-owns',
  'aria-placeholder',
  'aria-posinset',
  'aria-pressed',
  'aria-readonly',
  'aria-relevant',
  'aria-required',
  'aria-roledescription',
  'aria-rowcount',
  'aria-rowindex',
  'aria-rowindextext',
  'aria-rowspan',
  'aria-selected',
  'aria-setsize',
  'aria-sort',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
];

/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 * @param el The element that the attributes should be copied from.
 */
export const inheritAriaAttributes = (el: HTMLElement) => {
  return inheritAttributes(el, ariaAttributes);
};

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};

export const getAttributes = (el: HTMLElement) => {
  if (!el) { return {}; }
  return el.getAttributeNames().reduce((attrs, key) => ({ ...attrs, [key]: el.getAttribute(key) }), {}) as Attributes;
}

export type AddScriptOptions = Partial<{ id: string } & Pick<HTMLScriptElement, 'async' | 'charset' | 'crossOrigin' | 'defer' | 'src' | 'text' | 'type' | 'noModule' | 'referrerPolicy' | 'integrity'>>;

export function addHeadScript(opts: AddScriptOptions, doc = document) {
  const [headEl] = doc.getElementsByTagName('head') as any;
  const scriptEl = Object.assign(doc.createElement('script'), opts ?? {});
  opts?.id && scriptEl.setAttribute('id', opts?.id);
  headEl.appendChild(scriptEl);
}

export type PropClassTuples = Array<[string, string]>;

export namespace PropClassTuples {
  /**
   * Find the className in a given PropClassTuple on a target
   * @param target The target class to check for the value of a Prop on
   * @param propClassTup The array of tuples containing the propName key and className value
   * @param matchValue The value the prop must match
   * @returns Return the first className for the Prop that matches the matchValue
   */
  export function classForPropMatching(target: any, propClassTup: PropClassTuples, matchValue: any): string {
    for (const [prop, className] of propClassTup) {
      if (target[prop] === matchValue) {
        return className;
      }
    }
    return null;
  }
}

export function createElementFromHTML(htmlString: string) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

export const simpleHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0].toString(36);
};

export const deferEvent = (event: EventEmitter): EventEmitter => {
  return debounceEvent(event, 0);
};

export const debounceEvent = (event: EventEmitter, wait: number): EventEmitter => {
  const original = (event as any)._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  } as EventEmitter;
};

export const debounce = (func: (...args: any[]) => void, wait = 0) => {
  let timer: any;
  return (...args: any[]): any => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
