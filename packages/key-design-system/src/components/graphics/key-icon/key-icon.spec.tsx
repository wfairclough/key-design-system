import { newSpecPage } from '@stencil/core/testing';
import { KeyIcon } from './key-icon';

describe('key-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyIcon],
      html: '<key-icon></key-icon>',
    });
    expect(root).toEqualHtml(`
      <key-icon>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-icon>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyIcon],
      html: `<key-icon first="Stencil" last="'Don't call me a framework' JS"></key-icon>`,
    });
    expect(root).toEqualHtml(`
      <key-icon first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-icon>
    `);
  });
});
