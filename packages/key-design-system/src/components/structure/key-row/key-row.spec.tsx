import { newSpecPage } from '@stencil/core/testing';
import { KeyRow } from './key-row';

describe('key-row', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyRow],
      html: '<key-row></key-row>',
    });
    expect(root).toEqualHtml(`
      <key-row>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-row>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyRow],
      html: `<key-row first="Stencil" last="'Don't call me a framework' JS"></key-row>`,
    });
    expect(root).toEqualHtml(`
      <key-row first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-row>
    `);
  });
});
