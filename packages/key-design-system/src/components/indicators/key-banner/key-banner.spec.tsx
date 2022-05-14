import { newSpecPage } from '@stencil/core/testing';
import { KeyBanner } from './key-banner';

describe('key-banner', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyBanner],
      html: '<key-banner></key-banner>',
    });
    expect(root).toEqualHtml(`
      <key-banner>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-banner>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyBanner],
      html: `<key-banner first="Stencil" last="'Don't call me a framework' JS"></key-banner>`,
    });
    expect(root).toEqualHtml(`
      <key-banner first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-banner>
    `);
  });
});
