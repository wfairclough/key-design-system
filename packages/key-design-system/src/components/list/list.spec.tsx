import { newSpecPage } from '@stencil/core/testing';
import { List } from './list';

describe('key-list', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [List],
      html: '<key-list></key-list>',
    });
    expect(root).toEqualHtml(`
      <key-list>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-list>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [List],
      html: `<key-list first="Stencil" last="'Don't call me a framework' JS"></key-list>`,
    });
    expect(root).toEqualHtml(`
      <key-list first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-list>
    `);
  });
});
