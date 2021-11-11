import { newSpecPage } from '@stencil/core/testing';
import { Link } from './link';

describe('key-link', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Link],
      html: '<key-link></key-link>',
    });
    expect(root).toEqualHtml(`
      <key-link>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-link>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Link],
      html: `<key-link first="Stencil" last="'Don't call me a framework' JS"></key-link>`,
    });
    expect(root).toEqualHtml(`
      <key-link first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-link>
    `);
  });
});
