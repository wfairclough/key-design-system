import { newSpecPage } from '@stencil/core/testing';
import { KeyBackdrop } from './key-backdrop';

describe('key-backdrop', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyBackdrop],
      html: '<key-backdrop></key-backdrop>',
    });
    expect(root).toEqualHtml(`
      <key-backdrop>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-backdrop>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyBackdrop],
      html: `<key-backdrop first="Stencil" last="'Don't call me a framework' JS"></key-backdrop>`,
    });
    expect(root).toEqualHtml(`
      <key-backdrop first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-backdrop>
    `);
  });
});
