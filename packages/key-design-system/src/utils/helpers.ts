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

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};
