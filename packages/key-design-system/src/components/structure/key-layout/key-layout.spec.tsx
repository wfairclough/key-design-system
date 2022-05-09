import { newSpecPage } from '@stencil/core/testing';
import { KeyLayout } from './key-layout';

describe('key-layout', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyLayout],
      html: '<key-layout></key-layout>',
    });
    expect(root).toEqualHtml(`
      <key-layout>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-layout>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyLayout],
      html: `<key-layout first="Stencil" last="'Don't call me a framework' JS"></key-layout>`,
    });
    expect(root).toEqualHtml(`
      <key-layout first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-layout>
    `);
  });
});
