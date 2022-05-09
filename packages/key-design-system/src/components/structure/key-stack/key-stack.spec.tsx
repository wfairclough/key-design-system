import { newSpecPage } from '@stencil/core/testing';
import { KeyStack } from './key-stack';

describe('key-stack', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyStack],
      html: '<key-stack></key-stack>',
    });
    expect(root).toEqualHtml(`
      <key-stack>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-stack>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyStack],
      html: `<key-stack first="Stencil" last="'Don't call me a framework' JS"></key-stack>`,
    });
    expect(root).toEqualHtml(`
      <key-stack first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-stack>
    `);
  });
});
