import { newSpecPage } from '@stencil/core/testing';
import { ListItem } from './list-item';

describe('key-list-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ListItem],
      html: '<key-list-item></key-list-item>',
    });
    expect(root).toEqualHtml(`
      <key-list-item>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-list-item>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ListItem],
      html: `<key-list-item first="Stencil" last="'Don't call me a framework' JS"></key-list-item>`,
    });
    expect(root).toEqualHtml(`
      <key-list-item first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-list-item>
    `);
  });
});
