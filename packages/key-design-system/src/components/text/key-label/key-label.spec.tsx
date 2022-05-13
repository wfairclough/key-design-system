import { newSpecPage } from '@stencil/core/testing';
import { KeyLabel } from './key-label';

describe('key-label', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyLabel],
      html: '<key-label></key-label>',
    });
    expect(root).toEqualHtml(`
      <key-label>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-label>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyLabel],
      html: `<key-label first="Stencil" last="'Don't call me a framework' JS"></key-label>`,
    });
    expect(root).toEqualHtml(`
      <key-label first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-label>
    `);
  });
});
