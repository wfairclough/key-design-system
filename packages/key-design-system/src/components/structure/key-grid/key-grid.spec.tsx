import { newSpecPage } from '@stencil/core/testing';
import { KeyGrid } from './key-grid';

describe('key-grid', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyGrid],
      html: '<key-grid></key-grid>',
    });
    expect(root).toEqualHtml(`
      <key-grid>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-grid>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyGrid],
      html: `<key-grid first="Stencil" last="'Don't call me a framework' JS"></key-grid>`,
    });
    expect(root).toEqualHtml(`
      <key-grid first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-grid>
    `);
  });
});
