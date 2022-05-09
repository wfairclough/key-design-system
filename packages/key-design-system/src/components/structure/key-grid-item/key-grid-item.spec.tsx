import { newSpecPage } from '@stencil/core/testing';
import { KeyGridItem } from './key-grid-item';

describe('key-grid-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyGridItem],
      html: '<key-grid-item></key-grid-item>',
    });
    expect(root).toEqualHtml(`
      <key-grid-item>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-grid-item>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyGridItem],
      html: `<key-grid-item first="Stencil" last="'Don't call me a framework' JS"></key-grid-item>`,
    });
    expect(root).toEqualHtml(`
      <key-grid-item first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-grid-item>
    `);
  });
});
