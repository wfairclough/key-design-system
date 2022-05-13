import { newSpecPage } from '@stencil/core/testing';
import { KeyVisuallyHidden } from './key-visually-hidden';

describe('key-visually-hidden', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyVisuallyHidden],
      html: '<key-visually-hidden></key-visually-hidden>',
    });
    expect(root).toEqualHtml(`
      <key-visually-hidden>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-visually-hidden>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyVisuallyHidden],
      html: `<key-visually-hidden first="Stencil" last="'Don't call me a framework' JS"></key-visually-hidden>`,
    });
    expect(root).toEqualHtml(`
      <key-visually-hidden first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-visually-hidden>
    `);
  });
});
