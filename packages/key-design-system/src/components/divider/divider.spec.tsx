import { newSpecPage } from '@stencil/core/testing';
import { Divider } from './divider';

describe('key-divider', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Divider],
      html: '<key-divider></key-divider>',
    });
    expect(root).toEqualHtml(`
      <key-divider>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-divider>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Divider],
      html: `<key-divider first="Stencil" last="'Don't call me a framework' JS"></key-divider>`,
    });
    expect(root).toEqualHtml(`
      <key-divider first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-divider>
    `);
  });
});
